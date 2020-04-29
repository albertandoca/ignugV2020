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


let leerPeriodosAcademicosParalelos = (req, res) => {
    let idMalla = req.body.data.idMalla
    let idPeriodoAcademico = req.body.data.idPeriodoAcademico
    let idPeriodoLectivo = req.body.data.idPeriodoLectivo
    modelos.PeriodosAcademicosParalelos.findAll({
        attributes: {
            exclude: [
                'idPeriodoAcademico',
                'idPeriodoLectivo',
                'idMalla',
                'estado',
                'createdAt',
                'updatedAt'
            ]
        },
        where: {
            estado: true,
            idMalla: idMalla,
            idPeriodoAcademico: idPeriodoAcademico,
            idPeriodoLectivo: idPeriodoLectivo
        },
        order: [
            ['idJornada'],
            ['idParalelo']
        ]
    }).then(data => {
        return res.status(200).json({
            transaccion: true,
            data: data,
            msg: data.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: true,
            data: null,
            msg: 'Servidor Fuera de servicio'
        })
    })
}



module.exports = {
    leerPeriodosAcademicosParalelos
}