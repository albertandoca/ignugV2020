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
    resolucionPdfMiddleware = MULTIPARTY({uploadDir: './files/pdf/resolucion'}),
    rucPdfMiddleware = MULTIPARTY({uploadDir: './files/pdf/ruc'}),
    // filePdfMiddleware = MULTIPARTY({uploadDir: './files/pdf'}),
    personasControl = require('../controles/personas'),
    mallasControl = require('../controles/mallas'),
    autenticarControl = require('../controles/autenticar'),
    sesionControl = require('../controles/sesion'),
    tiposIdentificacionesControl = require('../controles/tiposIdentificaciones'),
    institutosControl = require('../controles/institutos'),
    filesControl = require('../controles/files'),
    cuposAsignaturasControl = require('../controles/cuposasignaturas'),
    documentosMatriculaControl = require('../controles/documentosmatricula'),
    solicitudMatriculaControl = require('../controles/solicitudesMatricula')


// EndPoint Personas
api.get('/leer-persona', personasControl.leer)
api.get('/leer-id-persona', [autenticarControl.autenticado, sesionControl.actualiza], personasControl.leerId)
api.post('/crear-persona', personasControl.crear)
api.get('/modificar-persona', personasControl.modificar)


// EndPoint Log
api.post('/login', personasControl.logIn)
// api.post('/logout', personasControl.logOut)

// EndPoint Mallas
api.get('/leer-mallas', mallasControl.leer)


// EndPoint TiposIdentificaciones
api.get('/leer-tipos-identificaciones', tiposIdentificacionesControl.leer)



// EndPoint Institutos
api.get('/leer-institutos', [autenticarControl.autenticado, sesionControl.actualiza], institutosControl.leer)



// EndPoint Files
api.post('/imagen-agenda', imagenAgendaMiddleware, filesControl.upload)
api.post('/imagen-logotipo', imagenLogotipoMiddleware, filesControl.upload)
api.post('/imagen-menu', imagenMenuMiddleware, filesControl.upload)
api.post('/imagen-persona', imagenPersonaMiddleware, filesControl.upload)
// api.post('/imagen-...', imagenAgendaMiddleware, filesControl.upload)
api.post('/pdf', filePdfMiddleware, filesControl.upload)
api.post('/pdf-resolucion', resolucionPdfMiddleware, filesControl.upload)
api.post('/pdf-ruc', rucPdfMiddleware, filesControl.upload)

api.get('/ver-archivo/:urlFile/:directorio', filesControl.verArchivo)
api.delete('/eliminar-archivo/:urlFile/:directorio', filesControl.eliminarArchivo)

api.put('/imagen-agenda/:urlFile/:directorio', imagenAgendaMiddleware, filesControl.modificarArchivo)
api.put('/imagen-logotipo/:urlFile/:directorio', imagenLogotipoMiddleware, filesControl.modificarArchivo)
api.put('/imagen-menu/:urlFile/:directorio', imagenMenuMiddleware, filesControl.modificarArchivo)
api.put('/imagen-persona/:urlFile/:directorio', imagenPersonaMiddleware, filesControl.modificarArchivo)

// EndPoint CuposAsignaturas
api.get('/obtener-cupos/:id/:idPeriodoLectivo:/idCarrera', cuposAsignaturasControl.obtenerCupo)
api.put('/aplicar-cupos', cuposAsignaturasControl.aplicarCupo)

// EndPoint documentosMatricula
api.get('/leer-documentos-matricula/:id/:idCarrera', documentosMatriculaControl.leerDocumentosMatricula)
api.post('/upload-documentos-matricula', documentosMatriculaControl.uploadDocumentosMatricula)
api.put('/update.documentos.matricula', documentosMatriculaControl.updateDocumentosMatricula)


// EndPoint solicitudMatricula
api.get('/leer-solicitud-matricula/:id/:idPeriodoAcademico', solicitudMatriculaControl.leerSolicitudMatricula)
api.post('/upload-solicitud-matricula', solicitudMatriculaControl.uploadSolicitudMatricula)
api.put('/update.solicitud.matricula', solicitudMatriculaControl.updateSolicitudMatricula)



module.exports = api
