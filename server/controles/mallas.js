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


let leer = (req, res) => {
    modelos.Mallas.findAll({
        attributes: {
            exclude: [
                'estado',
                'createAt',
                'updateAt'
            ]
        },
        where: {
            estado: false
        }
    }).then(respuesta => {
        let datos = JSON.stringify(respuesta)
        datos = JSON.parse(datos)
        res.status(200).json({
            transaccion: true,
            data: datos,
            msg: datos.length
        }) 
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}
let leerId = (req, res) => {
    modelos.Personas.findAll()
    .then(respuesta => {
        let datos = JSON.stringify(respuesta)
        datos = JSON.parse(datos)
        res.status(200).json({
            transaccion: true,
            data: datos,
            msg: datos.length
        }) 
    })
}
let leerPaginado = (req, res) => {
    
}
let crear = (req, res) => {
    let data = req.body.data
    data.semilla = req.sessionID
    data.enLinea = req.session.cookie._expires
    data.estado = 'Actualiza'
    modelos.Personas.create(data)
    .then(respuesta => {
        let datos = limpiarDatos(respuesta)
        res.status(200).json({
            transaccion: true,
            data: datos,
            msg: datos.length
        })
    })
    .catch(err => {
        let errors = []
        let msg = ''
        if (err.parent) {
            errors.push(err.parent.detail)
            msg = 'Registro duplicado'
        }
        if (err.errors.length > 0) {
            err.errors.forEach(element => {
                errors.push(element.path)
            });
            msg = 'Datos no validos'
        }
        res.status(400).json({
            transaccion: false,
            data: errors,
            msg: msg
        })
    })
}
let crearMasivo = (req, res) => {

}
let borrar = (req, res) => {

}
let modificar = (req, res) => {

}
let entrar = (req, res) => {

}



module.exports = {
    leer,
    leerId,
    leerPaginado,
    crear,
    crearMasivo,
    borrar,
    modificar,
    entrar
}