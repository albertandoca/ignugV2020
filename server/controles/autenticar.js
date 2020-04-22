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


let autenticado = (req, res, next) => {
    let idPersona = req.body.idPersona || null
    let token = req.headers.authorization || null
    let semilla = ''
    if (token && idPersona) {
        modelos.Personas.findOne({
            attributes: ['semilla'],
            where: {id: idPersona}
        }).then(data => {
            if (data) {
                jwt.verify(token, data.semilla, (err, decoded) => {
                    if (err) {
                        res.status(401).json({
                            transaccion: false,
                            data: err,
                            msg: 'Falló autenticación'
                        })
                    } else {
                        req.decoded = decoded
                        req.token = jwt.sign({data: req.decoded.data}, data.semilla, {
                            algorithm: 'HS256',
                            expiresIn: process.env.TIEMPO
                        })
                        next()
                    }
                })
            }
        }).catch(err => {
            return res.status(403).json({
                transaccion: false,
                data: null,
                msg: 'Error del servidor, sí el problema persiste por favor comuníquese con el adminsitrador del sistema'
            })
        })
    } else {
        return res.status(403).json({
            transaccion: false,
            data: null,
            msg: 'Error del servidor, sí el problema persiste por favor comuníquese con el adminsitrador del sistema'
        })
    }
}

module.exports = {
    autenticado
}