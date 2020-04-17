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
    let idEstudiante = req.params.idEstudiante
    let idPeriodoLectivo = req.params.idPeriodoLectivo
    let idCarrera = req.params.idCarrera
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
    let cuposAsignaturas = req.body.cuposAsignaturas
    let datos = []
    let error = []
    cuposAsignaturas.forEach(element => {
        modelos.CuposAsignaturas.update(
            {estado: cuposAsignaturas.estado},
            {
                where: {
                    id: element.id,
                    estado: {
                        [Op.or]: ['Asignado', 'Aplicado']
                    }
                }
            }).then(data => {
                datos.push(data)
            }).catch(err => {
                error.push(element)
            })
    });
    return res.status(200).json({
        transaccion: true,
        data: datos,
        error: error
    })
}

module.exports = {
    obtenerCupo,
    aplicarCupo
}