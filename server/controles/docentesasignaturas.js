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
let leerDocenteAsignatura = (req, res) => {
    modelos.DocentesAsignaturas.findAll({
        attributes: {
            exclude: [
                'estado'
            ]
        }
    }).then(docentesAsignaturas => {
        return res.status(200).json({
            transaccion: true,
            data: docentesAsignaturas,
            token: req.token,
            msg: docentesAsignaturas.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}

let obtenerDocenteAsignatura = (req, res) => {
    /*let idDocente = null
    let idCarrera = null
    if (req.body.data.idDocente) {
        idDocente = req.body.idPersona
        idCarrera = req.body.data
    } else {
        idDocente = req.body.idPersona
        idCarrera = req.body.data
    }*/
    console.log(req.body)
    let idDocente = null
    let idPeriodoLectivo = null
    if (typeof req.body.data.idDocente == 'undefined') {
        console.log('holaaaa')
        idDocente = req.body.idPersona
        idPeriodoLectivo = req.body.data
    } else {
        idDocente = req.body.data.idDocente
        idPeriodoLectivo = req.body.data.idPeriodoLectivo
    }

    modelos.DocentesAsignaturas.findAll({
        where: {
            idDocente: idDocente,
            idPeriodoLectivo: idPeriodoLectivo,

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
let gestionarDocenteAsignatura = (req, res) => {
    let docenteAsignatura = req.body.data
    let datos = []
    if (!docenteAsignatura.id) {
        modelos.DocentesAsignaturas.create(docenteAsignatura)
            .then(data => {
                datos.push(data.toJSON())
                return res.status(200).json({
                    transaccion: true,
                    data: datos,
                    token: req.token || null,
                    msg: datos.length
                })
            }).catch(err => {
                return res.status(400).json({
                    transaccion: false,
                    data: err,
                    msg: 'Error al actualizar el registro'
                })
            })
    } else {
        modelos.DocentesAsignaturas.update(docenteAsignatura, {
            where: {
                id: docenteAsignatura.id
            }
        }).then(data => {
            datos.push(data)
            return res.status(200).json({
                transaccion: true,
                data: datos,
                token: req.token || null,
                msg: datos.length
            })
        }).catch(err => {
            return res.status(400).json({
                transaccion: false,
                data: err,
                msg: 'Error al actualizar el registro'
            })
        })
    }
}

let establecerDocenteAsignatura = (req, res) => {
    let docenteAsignatura = req.body.data
    for (let docente of docentesAsignaturas) {
        modelos.DocentesAsignaturas.update(docenteAsignatura, {

            where: {
                id: docente.id
            }
        }).then(data => {
            datos.push(docente.Asignatura.detalle)
        }).catch(err => {
            error.push(docenteAsignatura.detalle)
        })
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

let asignarDocenteAsignatura = (req, res) => {
    let docentesAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let docente of docentesAsignaturas) {
        modelos.DocentesAsignaturas.update({
            where: {
                id: docente.id
            }
        }).then(data => {
            datos.push(docente.Asignatura.detalle)
        }).catch(err => {
            error.push(docenteAsignatura.detalle)
        })
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

let anularDocenteAsignatura = (req, res) => {
    let docentesAsignaturas = req.body.data
    let datos = []
    let error = []
    for (letvdocente of docentesAsignaturas) {
        modelos.DocentesAsignaturas.update({
            where: {
                id: docente.id
            }
        }).then(data => {
            datos.push(docente.Asignatura.detalle)
        }).catch(err => {
            error.push(docenteAsignatura.detalle)
        })
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

let eliminarDocenteAsignatura = (req, res) => {
    let docentesAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let docente of docentesAsignaturas) {
        modelos.DocentesAsignaturas.update({
            where: {
                id: docente.id,

            }
        }).then(data => {
            datos.push(docente.Asignatura.detalle)
        }).catch(err => {
            error.push(docenteAsignatura.detalle)
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
    leerDocenteAsignatura,
    obtenerDocenteAsignatura,
    gestionarDocenteAsignatura,
    asignarDocenteAsignatura,
    establecerDocenteAsignatura,
    anularDocenteAsignatura,
    eliminarDocenteAsignatura
}