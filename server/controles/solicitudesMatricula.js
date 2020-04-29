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
let Op = Sequelize.Op;


let leerSolicitudesMatriculas = (req, res) => {  
    modelos.SolicitudesMatriculas.findAll({
        where: {
            estado: 'Aplicado'
        },
        include:[
            {
                model: modelos.PeriodosLectivos,
                attributes:['detalle','fechaInicio','fechaFin'],
                required: true,
            },
            {
                model: modelos.PersonasRoles,
                required:true,
                include:[
                    {
                        model: modelos.Personas,
                        attributes:{
                            exclude: [
                                'id',
                                'emailPersonal',
                                'psw',
                                'semilla',
                                'enLinea',
                                'estado',
                                'createdAt',
                                'updatedAt'
                            ]
                        },
                        required:true
                    },
                    {
                        model: modelos.Carreras,
                        attributes:['detalle','id'],
                        required:true
                    }
                ],
                exclude:
                [
                    'idCarrera',
                    'idPersona'
                ]
            },
            {
                model: modelos.Mallas,
                required:true,
                include:[
                    {
                        model: modelos.Carreras,
                        attributes:['detalle'],
                        required:true
                    }
                ]
            }
        ]
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

let leerSolicitudMatricula = (req, res) => {
    let idEstudiante = null
    let idPeriodoLectivo = null
    if (req.body.data.idEstudiante == undefined) {
        idEstudiante = req.body.idPersona
        idPeriodoLectivo = req.body.data
    } else {
        idEstudiante = req.body.data.idEstudiante
        idPeriodoLectivo = req.body.data.idPeriodoLectivo
    }
    
    console.log(idEstudiante)
    console.log(idPeriodoLectivo)
    modelos.SolicitudesMatriculas.findOne({
        where: {
            idEstudiante: idEstudiante,
            idPeriodoLectivo: idPeriodoLectivo
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

let uploadSolicitudMatricula = (req, res) => {
    let solicitudMatricula = req.body.data
    modelos.SolicitudesMatricula.create(solicitudMatricula)
    .then(data => {
        return res.status(200).json({
            transaccion: true,
            data: data.dataValues,
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

let updateSolicitudMatricula = (req, res) => {

    let datos = req.body.data
    modelos.SolicitudesMatriculas.update({
        estado: datos.estado
    }, {
        where: {
            id: datos.id
        }
    }).then(data => {
        return res.status(200).json({
            transaccion: true,
            data: [data],
            msg: data.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: [],
            msg: 'Servidor error'
        })
    })
}

let updateSolicitudMatriculaErroneo = (req, res) => {

    let datos = req.body.data
    modelos.SolicitudesMatriculas.update({
        estado: datos.estado
    }, {
        where: {
            id: datos.id
        }
    }).then(data => {
        return res.status(200).json({
            transaccion: true,
            data: [data],
            msg: data.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: [],
            msg: 'Servidor error'
        })
    })
}

module.exports = {
    leerSolicitudMatricula,
    uploadSolicitudMatricula,
    updateSolicitudMatricula,
    leerSolicitudesMatriculas,
    updateSolicitudMatriculaErroneo,
    updateSolicitudMatricula
}