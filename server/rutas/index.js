;
const EXPRESS = require('express')
const MULTIPARTY = require('connect-multiparty')
const filePdf = require('connect-multiparty')


let api = EXPRESS.Router(),
    imagenAgendaMiddleware = MULTIPARTY({uploadDir: './files/imagen/agenda'}),
    imagenLogotipoMiddleware = MULTIPARTY({uploadDir: './files/imagen/logotipo'}),
    imagenMenuMiddleware = MULTIPARTY({uploadDir: './files/imagen/menu'}),
    imagenPersonaMiddleware = MULTIPARTY({uploadDir: './files/imagen/persona'}),
    filePdfMiddleware = MULTIPARTY({uploadDir: './files/pdf'}),
    // filePdfMiddleware = MULTIPARTY({uploadDir: './files/pdf'}),
    personasControl = require('../controles/personas'),
    mallasControl = require('../controles/mallas'),
    autenticarControl = require('../controles/autenticar'),
    sesionControl = require('../controles/sesion'),
    tiposIdentificacionesControl = require('../controles/tiposIdentificaciones')
    institutosControl = require('../controles/institutos'),
    filesControl = require('../controles/files')


// EndPoint Personas
api.get('/leer-persona', personasControl.leer)
api.get('/leer-id-persona', [autenticarControl.autenticado, sesionControl.actualiza], personasControl.leerId)
api.post('/crear-persona', personasControl.crear)
api.get('/ingresar-persona/:emailInstitucional/:psw', personasControl.ingresar)
api.get('/modificar-persona', personasControl.modificar)

// EndPoint Mallas
api.get('/leer-mallas', mallasControl.leer)


// EndPoint TiposIdentificaciones
api.get('/leer-tipos-identificaciones', tiposIdentificacionesControl.leer)



// EndPoint Institutos
api.get('/leer-institutos', institutosControl.leer)



// EndPoint Files
api.post('/imagen-agenda', imagenAgendaMiddleware, filesControl.upload)
api.post('/imagen-logotipo', imagenLogotipoMiddleware, filesControl.upload)
api.post('/imagen-menu', imagenMenuMiddleware, filesControl.upload)
api.post('/imagen-persona', imagenPersonaMiddleware, filesControl.upload)
// api.post('/imagen-...', imagenAgendaMiddleware, filesControl.upload)
api.post('/pdf-...', filePdfMiddleware, filesControl.upload)

api.get('/ver-archivo/:urlFile/:directorio', filesControl.verArchivo)
api.delete('/eliminar-archivo/:urlFile/:directorio', filesControl.eliminarArchivo)


api.put('/imagen-agenda/:urlFile/:directorio', imagenAgendaMiddleware, filesControl.modificarArchivo)
api.put('/imagen-logotipo/:urlFile/:directorio', imagenLogotipoMiddleware, filesControl.modificarArchivo)
api.put('/imagen-menu/:urlFile/:directorio', imagenMenuMiddleware, filesControl.modificarArchivo)
api.put('/imagen-persona/:urlFile/:directorio', imagenPersonaMiddleware, filesControl.modificarArchivo)



module.exports = api
