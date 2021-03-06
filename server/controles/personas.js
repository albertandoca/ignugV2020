;
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env]
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
let modelos = require('../models')
let Op = Sequelize.Op
// let bcrypt = require('bcrypt-nodejs')
let jwt = require('jsonwebtoken')

let leerUno = (req, res) => {

    let idPersonaSeleccionada = null

    if (req.body.data.idPersonaSeleccionada == undefined) {
        idPersonaSeleccionada = req.body.data.idPersonaSeleccionada
    } else {
        idPersonaSeleccionada = req.body.data.idPersonaSeleccionada
    }
    console.log(idPersonaSeleccionada)
    modelos.Personas.findOne({
        where: {
            id: idPersonaSeleccionada
        }
    }).then(data => {
        return res.status(200).json({
            transaccion: true,
            data: data,
            msg: data.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: null,
            msg: 'Error del servidor'
        })
    })
}

let leer = (req, res) => {
    let condicion = req.body.data || ['Activo', 'Actualiza'] 
    modelos.Personas.findAll({
        attributes: {
            exclude: [
                'idTipoIdentificacion',
                'psw',
                'semilla',
                'enLinea',
                'estado',
                'createdAt',
                'updatedAt'
            ]
        },
        where: {
            estado: {
                [Op.or]: condicion
            }
        },
        include: [
            {
                model: modelos.TiposIdentificaciones,
                attributes: ['id', 'detalle'],
                required: true
            },
            {
                model: modelos.PersonasRoles,
                attributes: ['id'],
                where: {
                    estado: true
                },
                required: true,
                include: [
                    {
                        model: modelos.Roles,
                        attributes: ['id', 'detalle'],
                        required: true
                    },
                    {
                        model: modelos.Institutos,
                        attributes: ['id', 'razonSocial'],
                        required: true
                    }
                ]
            }
        ],
        order: [
            ['apellidoPaterno'],
            ['apellidoMaterno'],
            ['primerNombre'],
            ['segundoNombre'],
            ['identificacion'],
            [modelos.PersonasRoles, 'id']
        ]
    }).then(personas => {
        res.status(200).json({
            transaccion: true,
            data: personas,
            token: req.token,
            msg: personas.length
        }) 
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}

let crear = (req, res) => {
    let datos = req.body.data
    datos.semilla = req.sessionID
    datos.enLinea = req.session.cookie._expires
    datos.estado = 'Actualiza'
    modelos.Personas.findOne({
        where: {
            [Op.or]: [
                {
                    identificacion: datos.identificacion
                },
                {
                    emailPersonal: datos.emailPersonal
                },
                {
                    emailInstitucional: datos.emailInstitucional
                }
            ]
        }
    }).then(data => {
        if (data) {
            modelos.Personas.create(datos)
            .then(dataAux => {
                datos = dataAux.toJSON()
                delete datos.semilla,
                delete datos.psw,
                delete datos.enLinea
                res.status(200).json({
                    transaccion: true,
                    data: datos,
                    token: req.token,
                    msg: datos.length
                })
            })
            .catch(err => {
                let errores = []
                let msg = ''
                if (err.errors.length > 0) {
                    err.errors.forEach(element => {
                        errores.push(element.path)
                    });
                    msg = 'Los datos se ingresaron incorrectamente'
                }
                res.status(400).json({
                    transaccion: false,
                    data: errores,
                    msg: msg
                })
            })
        } else {
            res.status(400).json({
                transaccion: false,
                data: [],
                msg: 'La cuenta del usuario ya existe'
            })
        }
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: null,
            msg: 'Error del servidor, sí el problema persiste por favor comuníquese con el adminsitrador del sistema'
        })
    })
}
let crearMasivo = (req, res) => {

}
let borrar = (req, res) => {

}
let modificar = (req, res) => {

}

let logIn = (req, res) => {
    let email = req.body.emailInstitucional
    let psw = req.body.psw
    let fecha = new Date(Date.now())
    let token = null
    let datos = []
    modelos.Personas.findOne({
        attributes: {
            exclude: [
                'idTipoIdentificacion',
                'semilla',
                'estado',
                'createdAt',
                'updatedAt'
            ]
        }, 
        where: {
            emailInstitucional: email,
            estado: {
                [Op.or]: ['Activo', 'Actualiza']
            }
        },
        include: [
            {
                model: modelos.TiposIdentificaciones,
                attributes: ['id', 'detalle'],
                required: true
            },
            {
                model: modelos.PersonasRoles,
                attributes: ['id'],
                where: {
                    estado: true
                },
                required: true,
                include: [
                    {
                        model: modelos.Roles,
                        attributes: ['id', 'detalle'],
                        required: true
                    },
                    {
                        model: modelos.Carreras,
                        attributes: ['id', 'detalle'],
                        required: true
                    }
                ]
            }
        ],
        order: [
            [modelos.PersonasRoles, 'id']
        ]
    }).then(persona => {
        if (persona) {
            if (persona.enLinea > fecha) {
                res.status(400).json({
                    transaccion: false,
                    data: [],
                    msg: 'Usuario bloqueado momentaneamente por su seguridad, es probable que haya realizado varios intentos de acceso, intente despues de 20 minutos'
                })
            } else {
                persona.comparePassword(psw, (err, isMatch) => {
                    if (isMatch && !err) {
                        persona = persona.toJSON()
                        delete persona.psw
                        delete persona.enLinea
                        let semilla = req.sessionID
                        token = jwt.sign({data: persona}, semilla, {
                            algorithm: 'HS256',
                            expiresIn: process.env.TIEMPO
                        })
                        datos.push(token)
                        modelos.Personas.update(
                            {
                                semilla: semilla,
                                enLinea: req.session.cookie._expires
                            },
                            {
                                where: {
                                    id: persona.id
                                }
                            }
                        ).then(() => {
                            res.status(200).json({
                                transaccion: true,
                                data: datos,
                                msg: datos.length
                            })
                        }).catch(err => {
                            res.status(404).json({
                                transaccion: false,
                                data: err,
                                msg: 'Fallo actualización'
                            })
                        })
                    } else {
                        res.status(404).json({
                            transaccion: false,
                            data: [],
                            msg: 'Usuario o contraseña incorrectos'
                        })
                    }
                })  
            }
        } else {
            res.status(404).json({
                transaccion: false,
                data: [],
                msg: 'Usuario o contraseña incorrectos'
            })
        }
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Error del servidor, sí el problema persiste por favor comuníquese con el adminsitrador del sistema'
        })
    })
}


let logOut = (req, res) => {
    let idPersona = req.body.idPersona
    let datos = []
    modelos.Personas.update(
        {
            semilla: 'nulnulnul',
            enLinea: 100100100
        },
        {
            where: {
                id: idPersona
            }
        }
    ).then(data => {
        datos.push(data)
        res.status(200).json({
            transaccion: true,
            data: datos,
            msg: datos.length
        })
    }).catch(err => {
        res.status(404).json({
            transaccion: false,
            data: err,
            msg: 'Fallo actualización'
        })
    })
}



module.exports = {
    leer,
    crear,
    crearMasivo,
    borrar,
    modificar,
    logIn,
    logOut,
    leerUno
}