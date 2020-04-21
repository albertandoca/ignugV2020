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


let leerSolicitudMatricula = (req, res) => {
    let idEstudiante = null
    let idPeriodoAcademico = null
    if (req.body.data.idEstudiante == undefined) {
        idEstudiante = req.body.idPersona
        idPeriodoLectivo = req.body.data
    } else {
        idEstudiante = req.body.data.idEstudiante
        idPeriodoLectivo = req.body.data
    }

    modelos.SolicitudesMatriculas.findOne({
        where: {
            idEstudiante: id,
            idPeriodoAcademico: idPeriodoAcademico
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
    let solicitudMatricula = req.body.data
    modelos.solicitudesMatricula.update(solicitudMatricula, {
        where: {
            id: solicitudMatricula.id,
            idPeriodoAcademico: solicitudMatricula.idPeriodoAcademico
        }
    })
    .then(data => {
        return res.status(200).json({
            transaccion: true,
            data: data,
            token: req.token,
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

module.exports = {
    leerSolicitudMatricula,
    uploadSolicitudMatricula,
    updateSolicitudMatricula
}