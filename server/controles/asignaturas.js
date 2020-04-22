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
    let idMalla = req.body.data.idMalla || null
    let idCarrera = req.body.data.idCarrera || null
    let idInstituto = req.body.data.idInstituto || null
    let grupo = ['Malla.id', 'Malla->Carrera.id', 'Malla->Carrera->Instituto.id']
    let atributo = ['Malla.detalle', 'Malla->Carrera.detalle', 'Malla->Carrera->Instituto.razonSocial']
    let i = req.body.data.grupo;
    let condicionMalla = {estado: true}
    let condicionCarrera = {estado: true}
    let condicionInstituto = {estado: true}
    console.log(i)
    console.log(grupo[i])
    console.log(atributo[i])
    if (idMalla) {
        condicionMalla.id = idMalla 
    }
    if (idCarrera) {
        condicionCarrera.id = idCarrera 
    }
    if (idInstituto) {
        condicionInstituto.id = idInstituto
    }
    modelos.Asignaturas.count({
        attributes: [atributo[i]],
        where:{
            estado: true,
        },
        include: [
            {
                model: modelos.Mallas,
                required: true,
                where: condicionMalla,
                include: [
                    {
                        model: modelos.Carreras,
                        required: true,
                        where: condicionCarrera,
                        include: [
                            {
                                model: modelos.Institutos,
                                required: true,
                                where: condicionInstituto,
                            }
                        ]
                    }
                ]
            }
        ],
        group: [
            grupo[i]
        ]
    }).then(data => {
        res.status(200).json({
            transaccion: true,
            data: data,
            msg: data.length
        })
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}




module.exports = {
    contarAsignaturas
}