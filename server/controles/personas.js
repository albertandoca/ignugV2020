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

let limpiarDatos = (data) => {
    data.psw = ''
    data.semilla = ''
    data.enLinea = ''
    return data
}

let leer = (req, res) => {
    let condicion = JSON.parse(req.query.condicion) || ['Activo', 'Actualiza'] 
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
                attributes: ['id', 'descripcion'],
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
                        attributes: ['id', 'descripcion'],
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
let leerId = (req, res) => {
    modelos.Lugares.findAll({
        where: {
            codigo: {
                [Op.ne]: '0'
            }
        },
        include: [
            {
                model: modelos.Lugares,
                attributes: ['codigo', 'descripcion'],
                required: true,
                // right: true,
                include: [
                    {
                        model: modelos.Lugares,
                        attributes: ['codigo', 'descripcion'],
                        required: true,
                        // right: true,
                        
                    }
                ]
            }
        ]
    })
    .then(respuesta => {
        res.status(200).json({
            transaccion: true,
            data: respuesta,
            msg: respuesta.length
        }) 
    })
}
let leerPaginado = (req, res) => {
    
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
    }).then(persona => {
        if (persona == null) {
            modelos.Personas.create(datos)
            .then(persona1 => {
                datos = limpiarDatos(persona1)
                res.status(200).json({
                    transaccion: true,
                    data: datos,
                    msg: datos.length
                })
            })
            .catch(err => {
                let errores = []
                let msg = ''
                if (err.errors.length > 0) {
                    console.log(err.errors)
                    err.errors.forEach(element => {
                        errores.push(element.path)
                    });
                    msg = 'Datos no validos'
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
                msg: 'Registro duplicado'
            })
        }
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}
let crearMasivo = (req, res) => {

}
let borrar = (req, res) => {

}
let modificar = (req, res) => {

}

let entrar = (req, res) => {
    let email = req.params.emailInstitucional
    let psw = req.params.psw
    let semilla = req.sessionID
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
                attributes: ['id', 'descripcion'],
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
                        attributes: ['id', 'descripcion'],
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
            [modelos.PersonasRoles, 'id']
        ]
    }).then(persona => {
        if (persona.id > 0) {
            if (persona.enLinea > fecha) {
                console.log(persona.fecha)
                res.status(404).json({
                    transaccion: false,
                    data: datos,
                    msg: 'Usuario en línea'
                })
            } else {
                
                persona.comparePassword(psw, (err, isMatch) => {
                    if (isMatch && !err) {
                        persona = persona.toJSON()
                        delete persona.psw
                        delete persona.enLinea
                        token = jwt.sign({data: persona}, semilla, {
                            algorithm: 'HS256'
                        })
                        datos.push({
                            data: persona,
                            token: token
                        })
                        modelos.Personas.update(
                            {
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
                            data: datos,
                            msg: 'Usuario o contraseña incorrectos'
                        })
                    }
                })  
            }
        } else {
            res.status(404).json({
                transaccion: false,
                data: datos,
                msg: 'Usuario o contraseña incorrectos'
            })
        }
    }).catch(err => {
        //console.log(err)
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}



module.exports = {
    leer,
    leerId,
    leerPaginado,
    crear,
    crearMasivo,
    borrar,
    modificar,
    entrar
}