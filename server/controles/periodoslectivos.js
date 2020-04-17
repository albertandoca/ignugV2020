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

let periodoLectivoActivo = (req, res) => {
    modelos.PeriodosLectivos.findOne({
        attributes: {
            exclude: [
                'estado',
                'createdAt',
                'updatedAt'
            ]
        }, 
        where: {
            estado: true
        }
    }).then(data => {
        console.log(data)
        let datos = [data]
        return res.status(200).json({
            transaccion: true,
            data: datos,
            msg: datos.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Error del servidor'
        })
    })
}




module.exports = {
    periodoLectivoActivo
}