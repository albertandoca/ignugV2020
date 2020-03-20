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



let leer = (req, res) => {
    modelos.Institutos.findAll({
        attributes: {
            exclude: [
                'estado'
            ],
            where:{
                estado: true
            }
        }
    }).then(institutos => {
        return res.status(200).json({
            transaccion: true,
            data: institutos,
            msg: institutos.length
        }) 
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}

let insertar = (req, res) => {
    let data = req.files.institutos
    


}   



module.exports = {
    leer
}