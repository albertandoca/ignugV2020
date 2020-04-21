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

// Estudiante
let guardarMatricula = (req, res) => {
    let data = req.body.data

    data.createdAt = new Date(Date.now())
    data.updatedAt = new Date(Date.now())

    modelos.Matriculas.create(data)
    .then(data => {
        console.log(respuesta.dataValues)
        return res.status(200).json({
            transaccion: true,
            data: [respuesta.dataValues],
            msg: data.length
        })
    }).catch(err => {
        let errores = []
        let msg = ''
        if (err.parent){
            errores.push(err.parent.defail)
                msg = 'Registro duplicado'
            }
        if (err.errors.length > 0) {
            console.log(err.errors)
            err.errors.forEach(element => {
                errores.push(element.path)
            });
            msg = 'Datos no validos'
        }
        res.status(400).json({
            transaccion: false,
            data: errores,
            msg: msg
        })
    })
} 


module.exports = {
    guardarMatricula
}