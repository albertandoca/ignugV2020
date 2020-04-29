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


let leerDocentesCarreras = (req, res) => {
    let idCarrera = req.body.data
    modelos.Personas.findAll({
        attributes: {
            exclude: [
                'emailPersonal',
                'idTipoIdentificacion',
                'psw',
                'semilla',
                'enLinea',
                'estado',
                'createdAt',
                'updatedAt'
            ]
        },
        where: {
            estado: {
                [Op.or]: ['Activo', 'Actualiza']
            }
        },
        include: [{
            model: modelos.PersonasRoles,
            attributes: ['id', 'idRol'],
            require: true,
            where: {
                estado: true,
                idCarrera: idCarrera,
                idRol: 5
            }
        }]
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
    leerDocentesCarreras
}