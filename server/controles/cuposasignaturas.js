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

// nuevos
let asiganrNuevoCupo = (req, res) => {

}

// cursantes
let promocionCupos = (req, res) => {

}

// Estudiante
let obtenerCupo = (req, res) => {
    console.log(req.body)
    let idEstudiante = null
    let idPeriodoLectivo = null
    if (typeof req.body.data.idEstudiante == 'undefined') {
        console.log('holaaaa')
        idEstudiante = req.body.idPersona
        idPeriodoLectivo = req.body.data
    } else {
        idEstudiante = req.body.data.idEstudiante
        idPeriodoLectivo = req.body.data
    }

    modelos.CuposAsignaturas.findAll({
        where: {
            idEstudiante: idEstudiante,
            idPeriodoLectivo: idPeriodoLectivo,
            
            estado: {
                [Op.or]: ['Asignado', 'Aplicado']
            }
        },
        include: [
            {
                model: modelos.Asignaturas,
                attributes: ['id', 'detalle', 'codigoAsignatura'],
                required: true,
                include: [
                    {
                        model: modelos.Mallas,
                        attributes: ['id', 'detalle'],
                        required: true,
                        include: [
                            {
                                model: modelos.Carreras,
                                attributes: ['id', 'detalle'],
                                required: true
                            }
                        ]
                    }
                    
                ]
            }
        ]
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


// Estudiante
let aplicarCupo = (req, res) => {
    let cuposAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let cupo of cuposAsignaturas) {
        modelos.CuposAsignaturas.update(
            {estado: cupo.estado},
            {
                where: {
                    id: cupo.id,
                    estado: {
                        [Op.or]: ['Asignado', 'Aplicado']
                    }
                }
            }).then(data => {
                datos.push(cupo.Asignatura.detalle)
            }).catch(err => {
                error.push(cupoAsignatura.detalle)
            }
        )
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

let matricularCupo = (req, res) => {
    let cuposAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let cupo of cuposAsignaturas) {
        modelos.CuposAsignaturas.update(
            {estado: 'Matriculado'},
            {
                where: {
                    id: cupo.id,
                    estado: 'Aplicado'
                }
            }).then(data => {
                datos.push(cupo.Asignatura.detalle)
            }).catch(err => {
                error.push(cupoAsignatura.detalle)
            }
        )
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

let anularCupo = (req, res) => {
    let cuposAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let cupo of cuposAsignaturas) {
        modelos.CuposAsignaturas.update(
            {estado:'Anulado'},
            {
                where: {
                    id: cupo.id,
                    estado: 'Matriculado'
                }
            }).then(data => {
                datos.push(cupo.Asignatura.detalle)
            }).catch(err => {
                error.push(cupoAsignatura.detalle)
            }
        )
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

let noUtilizadoCupo = (req, res) => {
    let cuposAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let cupo of cuposAsignaturas) {
        modelos.CuposAsignaturas.update(
            {estado: 'No utilizado'},
            {
                where: {
                    id: cupo.id,
                    estado: 'Asignado'
                }
            }).then(data => {
                datos.push(cupo.Asignatura.detalle)
            }).catch(err => {
                error.push(cupoAsignatura.detalle)
            }
        )
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

let eliminarCupo = (req, res) => {
    let cuposAsignaturas = req.body.data
    let datos = []
    let error = []
    for (let cupo of cuposAsignaturas) {
        modelos.CuposAsignaturas.update(
            {estado: 'Eliminado'},
            {
                where: {
                    id: cupo.id,
                    estado: {
                        [Op.or]: ['Asignado', 'Aplicado']
                    }
                }
            }).then(data => {
                datos.push(cupo.Asignatura.detalle)
            }).catch(err => {
                error.push(cupoAsignatura.detalle)
            }
        )
    }
    return res.status(200).json({
        transaccion: true,
        data: datos,
        token: req.token,
        error: error
    })
}

module.exports = {
    obtenerCupo,
    aplicarCupo,
    matricularCupo,
    anularCupo,
    noUtilizadoCupo,
    eliminarCupo
}