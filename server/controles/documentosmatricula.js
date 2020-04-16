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
    let id = req.params.id
    let idCarrera = req.params.idCarrera
    modelos.DocumentosMatricula.findOne({
        where: {
            id: id,
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
    let documentosMatricula = req.body.DocumentosMatricula
    modelos.DocumentosMatricula.create(documentosMatricula)
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
            msg: 'Error del servidor'
        })
    })
}

let updateDocumentosMatricula = (req, res) => {
    let documentosMatricula = req.body.DocumentosMatricula
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
            msg: 'Error del servidor'
        })
    })
}

module.exports = {
    leerDocumentosMatricula,
    uploadDocumentosMatricula,
    updateDocumentosMatricula
}