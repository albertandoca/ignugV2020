;
const EXPRESS = require('express')

let api = EXPRESS.Router(),
    personasControl = require('../controles/personas'),
    mallasControl = require('../controles/mallas'),
    autenticarControl = require('../controles/autenticar'),
    sesionControl = require('../controles/sesion'),
    tiposIdentificacionesControl = require('../controles/tiposIdentificaciones')


api.get('/leer', personasControl.leer)
api.get('/leer-id', [autenticarControl.autenticado, sesionControl.actualiza], personasControl.leerId)
api.post('/persona-crear', personasControl.crear)
api.get('/entrar/:emailInstitucional/:psw', personasControl.entrar)
api.get('/modificar', personasControl.modificar)
api.get('/mallas-leer', mallasControl.leer)
api.get('/leer-tipos-identificaciones', tiposIdentificacionesControl.leer)



module.exports = api
