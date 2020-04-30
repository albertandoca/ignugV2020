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

let leerCarrera = (req, res) => {

    let idCarrera = null

    idCarrera = req.body.data.idCarrera

    modelos.Carreras.findOne({
        where: {
            id: idCarrera
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


module.exports = {
    leerCarrera
}