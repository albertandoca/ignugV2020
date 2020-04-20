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




// Docente
let obtenerMateria = (req, res) => {
    let idDocente = null
    let idCarrera = null
    if (req.body.data.idDocente) {
        idDocente = req.body.idPersona
        idCarrera = req.body.data
    } else {
        idDocente = req.body.idPersona
        idCarrera = req.body.data
    }

    modelos.materiasAsignaturas.findAll({
        where: {
            idDocente: idDocente,
            idPeriodoLectivo: idPeriodoLectivo,
            estado: {
                [Op.or]: ['Asignado', 'Aplicado']
            }
        },
        include: [{
            model: modelos.Asignaturas,
            attributes: ['id', 'detalle', 'codigoAsignatura'],
            required: true,
            include: [{
                    model: modelos.Mallas,
                    attributes: ['id', 'detalle'],
                    required: true,
                    include: [{
                        model: modelos.Carreras,
                        attributes: ['id', 'detalle'],
                        required: true
                    }]
                }

            ]
        }]
    }).then(data => {
        return res.status(200).json({
            transaccion: true,
            data: data,
            token: req.token,
            msg: data.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: null,
            msg: 'Error del servidor'
        })
    })
}


// Docente
let aplicarMateria = (req, res) => {
    let materiasAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let materia of materiasAsignaturas) {
        modelos.DocentesAsignaturas.update({ estado: materia.estado }, {
            where: {
                id: materia.id,
                estado: {
                    [Op.or]: ['Asignado', 'Aplicado']
                }
            }
        }).then(data => {
            datos.push(materia.Asignatura.detalle)
        }).catch(err => {
            error.push(materiaAsignatura.detalle)
        })
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

let asignarrMateria = (req, res) => {
    let cuposAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let cupo of cuposAsignaturas) {
        modelos.DocentesAsignaturas.update({ estado: 'asignardo' }, {
            where: {
                id: cupo.id,
                estado: 'Aplicado'
            }
        }).then(data => {
            datos.push(cupo.Asignatura.detalle)
        }).catch(err => {
            error.push(materiaAsignatura.detalle)
        })
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

let anularMateria = (req, res) => {
    let materiasAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let materia of materiasAsignaturas) {
        modelos.DocentesAsignaturas.update({ estado: 'Anulado' }, {
            where: {
                id: materia.id,
                estado: 'asignardo'
            }
        }).then(data => {
            datos.push(materia.Asignatura.detalle)
        }).catch(err => {
            error.push(materiaAsignatura.detalle)
        })
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

let eliminarMateria = (req, res) => {
    let materiasAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let materia of materiasAsignaturas) {
        modelos.DocentesAsignaturas.update({ estado: 'Eliminado' }, {
            where: {
                id: materia.id,
                estado: {
                    [Op.or]: ['Asignado', 'Aplicado']
                }
            }
        }).then(data => {
            datos.push(materia.Asignatura.detalle)
        }).catch(err => {
            error.push(materiaAsignatura.detalle)
        })
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

module.exports = {
    obtenerMateria,
    aplicarMateria,
    asignarrMateria,
    anularMateria,
    eliminarMateria
}