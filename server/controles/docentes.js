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
let Op = Sequelize.Op

let leerDocentesCarreras = (req, res) => {
    let idCarrera = req.body.data
    modelos.Personas.findAll({
        attributes: {
            exclude: [
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
            attributes: ['id'],
            required: true,
            where: {
                idCarrera: idCarrera,
                idRol: 3,
                estado: true
            }
        }]
    }).then(data => {
        console.log(data)
        return res.status(200).json({
            transaccion: true,
            data: data,
            msg: data.length
        })
    }).catch(err => {
        console.log(err)
        return res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor Fuera de servicio'
        })
    })

}




module.exports = {
    leerDocentesCarreras
}