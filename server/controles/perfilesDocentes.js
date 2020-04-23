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

let leerPerfilDocente = (req, res) => {
    modelos.PerfilesDocentes.findAll({
        attributes: {
            exclude: [
                'estado'
            ]
        },
        where: {
            estado: true
        }
    }).then(perfilesDocentes => {
        return res.status(200).json({
            transaccion: true,
            data: perfilesDocentes,
            token: req.token,
            msg: perfilesDocentes.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}

let crearPerfilDocente = (req, res) => {
    let data = req.body
    data.createdAt = new Date(Date.now());
    data.updatedAt = new Date(Date.now());
    delete data.id;
    data.estado = true;
    console.log(data)
    modelos.PerfilesDocentes.create(data)
        .then(respuesta => {
            console.log(respuesta.dataValues)
            res.status(200).json({
                transaccion: true,
                data: [respuesta.dataValues],
                msg: data.length
            })
        })
        .catch(err => {
            console.log(err)
            let errors = []
            let msg = ''
            if (err.parent) {
                errors.push(err.parent.detail)
                msg = 'Registro duplicado'
            }
            if (err.errors.length > 0) {
                err.errors.forEach(element => {
                    errors.push(element.path)
                });
                msg = 'Datos no validos'
            }
            res.status(400).json({
                transaccion: false,
                data: errors,
                msg: msg
            })
        })
}


let modificarPerfilDocente = (req, res) => {
    let data = req.body
    let identificador = data.id
    data.updatedAt = new Date(Date.now());
    data.estado = true;
    console.log(data)
    modelos.PerfilesDocentes.findOne({
        where: {
            id: identificador
        }
    }).then(instalacion => {
        console.log(identificador)
        instalacion.update(data)
        console.log(instalacion)
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}

let eliminarPerfilDocente = (req, res) => {
    let data = req.body
    let identificador = data.id
    data.updatedAt = new Date(Date.now());
    data.estado = false;
    console.log(data)
    modelos.PerfilesDocentes.findOne({
        where: {
            id: identificador
        }
    }).then(instalacion => {
        console.log(identificador)
        instalacion.update(data)
        console.log(instalacion)
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}



module.exports = {
    leerPerfilDocente,
    crearPerfilDocente,
    modificarPerfilDocente,
    eliminarPerfilDocente
}