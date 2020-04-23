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

let leerMaxHorasDocente = (req, res) => {
    let idPeriodoLectivo = req.body.data
    console.log(idPeriodoLectivo)
        /* Cuando data tiene 1 valor
        req: {
            body: {
                idPersona: 2,
                data: 3
            }
        } */

    /* Cuando data tiene varios valores

     let id = req.body.data.id
    let idPersona = req.body.idPersona
    let detalle = req.body.data.detalle


         req: {
        body: {
            idPersona: 2,
            data: {
                id: 4,
                detalle: 'casa'
            }
        }
    } */

    modelos.MaxHorasDocente.findAll({
        attributes: {
            exclude: [
                'estado',
                'createdAt',
                'updatedAt'
            ]
        },
        where: {
            estado: true,
            idPeriodoLectivo: idPeriodoLectivo
        },
        include: [{
                model: modelos.Personas,
                attributes: ['id', 'identificacion', 'primerNombre', 'segundoNombre', 'apellidoPaterno', 'apellidoMaterno', 'emailInstitucional'],
                required: true
            },
            {
                model: modelos.PeriodosLectivos,
                attributes: ['id', 'detalle'],
                required: true
            }
        ]
    }).then(data => {
        console.log('jkfshkajhf')
            // let datos = []    CUando data tiene un solo elemento
            //datos.push(data)
        return res.status(200).json({
            transaccion: true,
            data: data,
            msg: data.lenght
        })
    }).catch(err => {
        console.log(err)
        return res.status(400).json({
            transaccion: false,
            data: err,
            msg: 'Servidor fuera de servicio'
        })
    })
}

let leerMaxhorasDocenteId = (req, res) => {
    let idPeriodoLectivo = req.body.data.idPeriodoLectivo
    let idDocente = req.body.data.idDocente


    modelos.MaxHorasDocente.findOne({
        attributes: {
            exclude: [
                'estado',
                'createdAt',
                'updatedAt'
            ]



        },
        where: {
            estado: true,
            idDocente: idDocente,
            idPeriodoLectivo: idPeriodoLectivo
        },
        include: [{
                model: modelos.PeriodosLectivos,
                attributes: ['id', 'detalle'],
                required: true
            },
            {
                model: modelos.Personas,
                attributes: ['id', 'identificacion', 'primerNombre', 'segundoNombre', 'apellidoPaterno', 'apellidoMaterno', 'emailInstitucional'],
                required: true
            }
        ]

    }).then(data => {
        let datos = []
        datos.push(data)
        return res.status(200).json({
            transaccion: true,
            data: data,
            msg: data.lenght
        })
    }).catch(err => {
        console.log(err)
        return res.status(400).json({
            transaccion: false,
            data: err,
            msg: 'Servidor fuera de servicio'
        })
    })
}

let crearModificarMaxHorasDocente = (req, res) => {
    let maxHorasDocente = req.body.data
    if (maxHorasDocente.id) {
        modelos.MaxHorasDocente.update(maxHorasDocente, {
            where: {
                id: maxHorasDocente.id
            }
        }).then(data => {
            let datos = []
            datos.push(data)
            return res.status(200).json({
                transaccion: true,
                data: data,
                msg: data.lenght
            })
        }).catch(err => {
            console.log(err)
            return res.status(400).json({
                transaccion: false,
                data: err,
                msg: 'Servidor fuera de servicio'
            })
        })
    } else {
        modelos.MaxHorasDocente.create(maxHorasDocente)
            .then(data => {
                let datos = []
                datos.push(data)
                return res.status(200).json({
                    transaccion: true,
                    data: data,
                    msg: data.lenght
                })
            }).catch(err => {
                console.log(err)
                return res.status(400).json({
                    transaccion: false,
                    data: err,
                    msg: 'Servidor fuera de servicio'
                })
            })
    }
}

module.exports = {
    leerMaxHorasDocente,
    leerMaxhorasDocenteId,
    crearModificarMaxHorasDocente
}