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

let prb = (req, res) => {
    let docenteAsignatura = req.body.data
    let datos = []

    modelos.DocentesAsignaturas.create(docenteAsignatura)
        .then(data => {
            let d = data.toJSON()

            console.log(d)
            res.status(200).json({
                hhh: 'hhhh'
            })
            console.log('llego aquí')
                /*return res.status(200).json({
                    transaccion: true,
                    data: datos,
                    token: req.token || null,
                    msg: datos.length
                })*/
        }).catch(err => {
            console.log(err)
            return res.status(400).json({
                transaccion: false,
                data: err,
                msg: 'Error al actualizar el registro'
            })
        })
}

module.exports = {
    prb
}