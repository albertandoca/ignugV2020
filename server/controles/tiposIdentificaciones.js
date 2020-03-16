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


let leer = (req, res) => {
    modelos.TiposIdentificaciones.findAll({
        attributes: {
            exclude: [
                'estado',
                'createdAt',
                'updatedAt'
            ],
            where:{
                estado: true
            }
        }
    }).then(tiposIdentificaciones => {
        res.status(200).json({
            transaccion: true,
            data: tiposIdentificaciones,
            msg: tiposIdentificaciones.length
        }) 
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}

module.exports = {
    leer
}