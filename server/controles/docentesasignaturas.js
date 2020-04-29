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
    console.log(req.body)
    let idDocente = null
    let idPeriodoLectivo = null
    if (typeof req.body.data.idDocente == 'undefined' || !req.bady.data.idDocente) {
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
            }]
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

let contarDocentesAsignaturas = (req, res) => {
    let idPeriodoLectivo = req.body.data.idPeriodoLectivo
    let idPeriodoAcademico = req.body.data.periodoAcademico || null
    let idMalla = req.body.data.idMalla || null
    let idsCarreras = req.body.data.idsCarreras || null
    let idsInstitutos = req.body.data.idsInstitutos || null
    let grupo = [['Asignatura->PeriodosAcademico.id', 'Asignatura->Malla.id'], ['Asignatura->Malla.id'], ['Asignatura->Malla->Carrera.id'], ['Asignatura->Malla->Carrera->Instituto.id']]
    let atributo = [['Asignatura->PeriodosAcademico.nivel', sequelize.literal('\"Asignatura->PeriodosAcademico\".\"id\" AS \"idPeriodoAcademico\"'), 'Asignatura->Malla.detalle'], ['Asignatura->Malla.detalle'], ['Asignatura->Malla->Carrera.detalle'], ['Asignatura->Malla->Carrera->Instituto.razonSocial']]
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
    modelos.DocentesAsignaturas.count({
        attributes: atributo[i],
        where: {
            idPeriodoLectivo: idPeriodoLectivo,
            estado: true
        },
        include: [{
            model: modelos.Asignaturas,
            required: true,
            where: {
                estado: true
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
                        where: condicionInstituto
                    }]
                }]
            },
            {
                model: modelos.PeriodosAcademicos,
                required: true,
                where: condicionPeriodoAcademico,            
            }]
        }],
        group: grupo[i]
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

let contarDocentesAsignaturasParalelo = (req, res) => {
    let idPeriodoLectivo = req.body.data.idPeriodoLectivo
    let idMalla = req.body.data.idMalla || null
    let idPeriodoAcademico = req.body.data.idPeriodoAcademico || null
    let condicionAsignatura = {
        estado: true
    }
    if (condicionAsignatura) {
        condicionAsignatura.idPeriodoAcademico = idPeriodoAcademico
    }
    
    modelos.DocentesAsignaturas.count({
        attributes: [sequelize.literal('\"Jornada\".\"detalle\" AS \"jornada\"'), sequelize.literal('\"Jornada\".\"id\" AS \"idJornada\"'), 'Paralelo.detalle'],
        where: {
            estado: true,
            idPeriodoLectivo: idPeriodoLectivo
        },
        include: [{
            model: modelos.Asignaturas,
            required: true,
            where: condicionAsignatura,
            include: [{
                model: modelos.Mallas,
                required: true,
                where: {
                    estado: true,
                    id: idMalla
                }
            }]
        },
        {
            model: modelos.Paralelos,
            atrributes: ['detalle'],
            required: true,
            where: {
                estado: true
            }   
        },
        {
            model: modelos.Jornadas,
            atrributes: ['detalle'],
            required: true,
            where: {
                estado: true
            }   
        }],
        group: [
            'Jornada.id', 'Paralelo.id'
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

let leerDocenteAsignaturaParalelo = (req, res) => {
    let idMalla = req.body.data.idMalla
    let idPeriodoLectivo = req.body.data.idPeriodoLectivo
    let idParalelo = req.body.data.idParalelo
    let idJornada = req.body.data.idJornada
    modelos.DocentesAsignaturas.findAll({
        attributes: {
            exclude: [
                'idPerioLectivo',
                'idParalelo',
                'idJornada',
                'estado',
                'createdAt',
                'updatedAt'
            ]
        },
        where: {
            idPeriodoLectivo : idPeriodoLectivo,
            idParalelo: idParalelo,
            idJornada: idJornada
        },
        include: [
            {
                model: modelos.Asignaturas,
                attributes: ['id', 'codigoAsignatura', 'detalle'],
                where: {
                    idMalla: idMalla,
                },
                required: true
            },
            {
                model: modelos.Personas,
                attributes: [
                    'id',
                    'primerNombre',
                    'segundoNombre',
                    'apellidoPaterno',
                    'apellidoMaterno',
                    'emailInstitucional'
                ]
            }
        ],
        order: [
            ['Asignatura', 'detalle']
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
            data: err,
            msg: 'Error del servidor'
        })
    })
}

let contarHorasDocentes = (req, res) => {
    let idPeriodoLectivo = req.body.data.idPeriodoLectivo
    let idCarrera = req.body.data.idCarrera
    modelos.DocentesAsignaturas.findAll({
       attributes: ['DocentesAsignaturas.idDocente', [sequelize.fn('sum', sequelize.col('Asignatura.creditos')), 'total']],
        where: {
            idPeriodoLectivo: idPeriodoLectivo
        },
        include: {
            model: modelos.Asignaturas,
            attributes: {
                exclude: [
                    'id',
                    'codigoAsignatura',
                    'detalle',
                    'creditos',
                    'horasDocente',
                    'horasPracticas',
                    'horasAutonomas',
                    'estado',
                    'idMalla',
                    'idPeriodoAcademico',
                    'idCampoFormacion',
                    'idUnidadCurricular',
                    'createdAt',
                    'updatedAt',
                ]
            },
            required: true,
            include: {
                model: modelos.Mallas,
                attributes: [],
                where: {
                    idCarrera: idCarrera
                },
                required: true
            }
        },
        group: ['DocentesAsignaturas.idDocente'],
        raw: true
    }).then(data => {
        return res.status(200).json({
            transaccion: true,
            data: data,
            msg: data.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Error del servidor'
        })
    })
}


module.exports = {
    leerDocenteAsignatura,
    obtenerDocenteAsignatura,
    gestionarDocenteAsignatura,
    asignarDocenteAsignatura,
    establecerDocenteAsignatura,
    anularDocenteAsignatura,
    eliminarDocenteAsignatura,
    contarDocentesAsignaturas,
    contarDocentesAsignaturasParalelo,
    leerDocenteAsignaturaParalelo,
    contarHorasDocentes

}