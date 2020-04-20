;
let jwt = require('jsonwebtoken')
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

let actualiza = (req, res, next) => {
    modelos.Personas.update(
        {
        enLinea: req.session.cookie._expires
        },
        {
            where: {
                id: req.decoded.data.id
            }
        }
    ).then(() => {
        next()
    }).catch(err => {
        res.status(404).json({
            transaccion: false,
            data: err,
            msg: 'La sesion no se actualizo correctamente'
        })
    })
}



module.exports = {
    actualiza
}