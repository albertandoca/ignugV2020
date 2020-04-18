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
let aplicarCupo = async (req, res) => {
    let cuposAsignaturas = req.body
    let datos = []
    let error = []
    await cuposAsignaturas.forEach(async element => {
        await modelos.CuposAsignaturas.update(
            {estado: element.estado},
            {
                where: {
                    id: element.id,
                    estado: {
                        [Op.or]: ['Asignado', 'Aplicado']
                    }
                }
            }).then(async data => {
                console.log(element.Asignatura.detalle)
                await datos.push(element.Asignatura.detalle)
            }).catch(async err => {
                console.log(error)
                await error.push(element)
            })
    });
    console.log(datos)
    console.log('jjjjS')
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