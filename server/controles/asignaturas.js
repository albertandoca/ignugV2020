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

let contarAsignaturas = (req, res) => {
    let idPeriodoAcademico = req.body.data.periodoAcademico || null
    let idMalla = req.body.data.idMalla || null
    let idsCarreras = req.body.data.idsCarreras || null
    let idsInstitutos = req.body.data.idsInstitutos || null
    //let grupo = ['Malla.id', 'Malla->Carrera.id', 'Malla->Carrera->Instituto.id']
    //let atributo = ['Malla.detalle', 'Malla->Carrera.detalle', 'Malla->Carrera->Instituto.razonSocial']
    let grupo = [
        ['PeriodosAcademico.id', 'Malla.id'],
        ['Malla.id'],
        ['Malla->Carrera.id'],
        ['Malla->Carrera->Instituto.id']
    ]
    let atributo = [
        ['PeriodosAcademico.nivel', sequelize.literal('\"PeriodosAcademico\".\"id\" AS \"idPeriodoAcademico\"'), 'Malla.detalle'],
        ['Malla.detalle'],
        ['Malla->Carrera.detalle'],
        ['Malla->Carrera->Instituto.razonSocial']
    ]
    let i = req.body.data.grupo;
    let condicionPeriodoAcademico = {
        estado: true
    }
    let condicionMalla = {
        estado: true
    }
    let condicionCarrera = {
        estado: true
    }
    let condicionInstituto = {
        estado: true
    }

    if (idPeriodoAcademico) {
        condicionPeriodoAcademico.id = idPeriodoAcademico
    }
    if (idMalla) {
        condicionMalla.id = idMalla
    }
    if (idsCarreras) {
        condicionCarrera.id = {
            [Op.in]: idsCarreras
        }
    }
    if (idsInstitutos) {
        condicionInstituto.id = {
            [Op.in]: idsInstitutos
        }
    }
    modelos.Asignaturas.count({
        attributes: atributo[i],
        where: {
            estado: true,
        },
        include: [{
                model: modelos.Mallas,
                required: true,
                where: condicionMalla,
                include: [{
                    model: modelos.Carreras,
                    required: true,
                    where: condicionCarrera,
                    include: [{
                        model: modelos.Institutos,
                        required: true,
                        where: condicionInstituto,
                    }]
                }],
            },
            {
                model: modelos.PeriodosAcademicos,
                required: true,
                where: condicionPeriodoAcademico,
            }
        ],
        group: grupo[i]
    }).then(data => {
        res.status(200).json({
            transaccion: true,
            data: data,
            msg: data.length
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}

let leerAsignaturasPeriodoAcademico = (req, res) => {
    let idperiodoAcademico = req.body.data.idPeriodoAcademico
    let idMalla = req.body.data.idMalla
    modelos.Asignaturas.findAll({
        attributes: {
            exclude: [
                'idMalla',
                'idPeriodoAcademico',
                'idCampoFormacion',
                'idUnidadCurricular',
                'estado',
                'createdAt',
                'updatedAt'
            ]
        },
        where: {
            estado: true,
            idMalla: idMalla,
            idPeriodoAcademico: idperiodoAcademico
        },
        order: [
            ['detalle']
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
    contarAsignaturas,
    leerAsignaturasPeriodoAcademico
}