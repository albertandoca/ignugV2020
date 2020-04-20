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


let leerDocumentosMatricula = (req, res) => {
    let idEstudiante = null
    let idCarrera = null
    if (req.body.data.idEstudiante) {
        idEstudiante = req.body.idPersona
        idCarrera = req.body.data
    } else {
        idEstudiante = req.body.idPersona
        idCarrera = req.body.data
    }
    
    modelos.DocumentosMatriculas.findOne({
        where: {
            idEstudiante: idEstudiante,
            idCarrera: idCarrera
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

let uploadDocumentosMatricula = (req, res) => {
    let documentosMatricula = req.body.data
    modelos.DocumentosMatriculas.create(documentosMatricula)
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

let updateDocumentosMatricula = (req, res) => {
    let documentosMatricula = req.body.data
    modelos.DocumentosMatricula.update(documentosMatricula, {
        where: {
            id: documentosMatricula.id,
            idCarrera: documentosMatricula.idCarrera
        }
    })
    .then(data => {
        return res.status(200).json({
            transaccion: true,
            data: data,
            msg: data.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: null,
            msg: 'Error del servidor, sí el problema persiste por favor comuníquese con el adminsitrador del sistema'
        })
    })
}

module.exports = {
    leerDocumentosMatricula,
    uploadDocumentosMatricula,
    updateDocumentosMatricula
}