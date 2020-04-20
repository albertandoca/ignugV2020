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


let leer = (req, res) => {
    modelos.Mallas.findAll({
        attributes: {
            exclude: [
                'estado',
                'createAt',
                'updateAt'
            ]
        },
        where: {
            estado: false
        }
    }).then(respuesta => {
        let datos = JSON.stringify(respuesta)
        datos = JSON.parse(datos)
        res.status(200).json({
            transaccion: true,
            data: datos,
            msg: datos.length
        }) 
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: null,
            msg: 'Error del servidor, sí el problema persiste por favor comuníquese con el adminsitrador del sistema'
        })
    })
}



module.exports = {
    leer
}