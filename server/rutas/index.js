    ;
const EXPRESS = require('express')
const MULTIPARTY = require('connect-multiparty')
const filePdf = require('connect-multiparty')


let api = EXPRESS.Router(),
    imagenAgendaMiddleware = MULTIPARTY({
        uploadDir: './files/imagen/agenda'
    }),
    imagenLogotipoMiddleware = MULTIPARTY({
        uploadDir: './files/imagen/logotipo'
    }),
    imagenMenuMiddleware = MULTIPARTY({
        uploadDir: './files/imagen/menu'
    }),
    imagenPersonaMiddleware = MULTIPARTY({
        uploadDir: './files/imagen/persona'
    }),
    filePdfMiddleware = MULTIPARTY({
        uploadDir: './files/pdf'
    }),
    resolucionPdfMiddleware = MULTIPARTY({
        uploadDir: './files/pdf/resolucion'
    }),
    rucPdfMiddleware = MULTIPARTY({
        uploadDir: './files/pdf/ruc'
    }),
    matriculaPdfMiddleware = MULTIPARTY({
        uploadDir: './files/pdf/matricula'
    }),
    imagenEventoMiddleware = MULTIPARTY({
        uploadDir: './files/imagen/evento'})

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
    solicitudMatriculaControl = require('../controles/solicitudesMatricula'),
    periodosLectivosControl = require('../controles/periodoslectivos'),
    matriculaControl = require('../controles/matriculas'),
    carreraControl = require('../controles/carrera'),
    eventosControl = require('../controles/eventos')
    asignaturasControl = require('../controles/asignaturas'),
    docentesAsignaturasControl = require('../controles/docentesasignaturas'),
    docentesControl = require('../controles/docentes'),
    periodoAcademicosParalelosControl = require('../controles/periodosacademicosparalelos')


// EndPoint Personas
api.post('/leer-persona', [autenticarControl.autenticado, sesionControl.actualiza], personasControl.leer)
api.post('/crear-persona', [autenticarControl.autenticado, sesionControl.actualiza], personasControl.crear)
api.post('/modificar-persona', [autenticarControl.autenticado, sesionControl.actualiza], personasControl.modificar)
api.post('/leer-uno',/*[autenticarControl.autenticado, sesionControl.actualiza],*/ personasControl.leerUno)

// EndPoint Log
api.post('/login', personasControl.logIn)
api.post('/logout', personasControl.logOut)

// EndPoint Mallas
api.post('/leer-mallas', [autenticarControl.autenticado, sesionControl.actualiza], mallasControl.leer)


// EndPoint TiposIdentificaciones
api.post('/leer-tipos-identificaciones', [autenticarControl.autenticado, sesionControl.actualiza], tiposIdentificacionesControl.leer)



// EndPoint Institutos
api.post('/leer-institutos', /* [autenticarControl.autenticado, sesionControl.actualiza], */ institutosControl.leer)



// EndPoint Files
api.post(
    '/imagen-agenda', 
    [
        autenticarControl.autenticado, 
        sesionControl.actualiza, 
        imagenAgendaMiddleware
    ], 
    filesControl.upload
)
api.post('/imagen-logotipo', [autenticarControl.autenticado, sesionControl.actualiza, imagenLogotipoMiddleware], filesControl.upload)
api.post('/imagen-menu', [autenticarControl.autenticado, sesionControl.actualiza, imagenMenuMiddleware], filesControl.upload)
api.post('/imagen-persona', [autenticarControl.autenticado, sesionControl.actualiza, imagenPersonaMiddleware], filesControl.upload)
api.post('/imagen-evento',[autenticarControl.autenticado, sesionControl.actualiza, imagenPersonaMiddleware], imagenEventoMiddleware, filesControl.upload)
// api.post('/imagen-...', imagenAgendaMiddleware], filesControl.upload)

api.post('/pdf', [autenticarControl.autenticado, sesionControl.actualiza, filePdfMiddleware], filesControl.upload)
api.post('/pdf-resolucion', [autenticarControl.autenticado, sesionControl.actualiza, resolucionPdfMiddleware], filesControl.upload)
api.post('/pdf-ruc', [autenticarControl.autenticado, sesionControl.actualiza, rucPdfMiddleware], filesControl.upload)
api.post('/pdf-matricula', [autenticarControl.autenticado, sesionControl.actualiza, matriculaPdfMiddleware], filesControl.upload)
//api.post('/pdf-cupo', [autenticarControl.autenticado, sesionControl.actualiza, matriculaPdfMiddleware], filesControl.upload)
//api.post('/pdf-cedula', [autenticarControl.autenticado, sesionControl.actualiza, matriculaPdfMiddleware], filesControl.upload)


api.get('/ver-archivo/:urlFile/:directorio', filesControl.verArchivo)
api.delete('/eliminar-archivo', [autenticarControl.autenticado, sesionControl.actualiza], filesControl.eliminarArchivo)

api.put('/imagen-agenda', [autenticarControl.autenticado, sesionControl.actualiza, imagenAgendaMiddleware], filesControl.modificarArchivo)
api.put('/imagen-logotipo', [autenticarControl.autenticado, sesionControl.actualiza, imagenLogotipoMiddleware], filesControl.modificarArchivo)
api.put('/imagen-menu', [autenticarControl.autenticado, sesionControl.actualiza, imagenMenuMiddleware], filesControl.modificarArchivo)
api.put('/imagen-persona', [autenticarControl.autenticado, sesionControl.actualiza, imagenPersonaMiddleware], filesControl.modificarArchivo)

// EndPoint CuposAsignaturas
api.post('/obtener-cupos', /*[autenticarControl.autenticado, sesionControl.actualiza], */ cuposAsignaturasControl.obtenerCupo)
api.put('/aplicar-cupos', [autenticarControl.autenticado, sesionControl.actualiza], cuposAsignaturasControl.aplicarCupo)
api.post('/obtener-asignaturas',/*[autenticarControl.autenticado, sesionControl.actualiza],*/cuposAsignaturasControl.obtenerAsignaturas)
api.post('/matricular-cupo',/*[autenticarControl.autenticado, sesionControl.actualiza],*/cuposAsignaturasControl.matricularCupo)


// EndPoint documentosMatricula
api.post('/leer-documentos-matricula', /*[autenticarControl.autenticado, sesionControl.actualiza],*/ documentosMatriculaControl.leerDocumentosMatricula)
api.post('/upload-documentos-matricula', [autenticarControl.autenticado, sesionControl.actualiza], documentosMatriculaControl.uploadDocumentosMatricula)
api.put('/update.documentos.matricula', [autenticarControl.autenticado, sesionControl.actualiza], documentosMatriculaControl.updateDocumentosMatricula)
api.post('/update.documentos.matricula.erroneo', /*[autenticarControl.autenticado, sesionControl.actualiza],*/ documentosMatriculaControl.updateDocumentosMatriculaErroneo)


// EndPoint solicitudMatricula
api.post('/leer-solicitudes-matriculas',solicitudMatriculaControl.leerSolicitudesMatriculas)
api.post('/leer-solicitud-matricula', /*[autenticarControl.autenticado, sesionControl.actualiza], */solicitudMatriculaControl.leerSolicitudMatricula)
api.post('/upload-solicitud-matricula', [autenticarControl.autenticado, sesionControl.actualiza], solicitudMatriculaControl.uploadSolicitudMatricula)
api.post('/update.solicitud.matricula', /*[autenticarControl.autenticado, sesionControl.actualiza],*/ solicitudMatriculaControl.updateSolicitudMatricula)
api.post('/update.solicitud.matricula.erroneo', /*[autenticarControl.autenticado, sesionControl.actualiza],*/ solicitudMatriculaControl.updateSolicitudMatriculaErroneo)


// endPoint PeriodosLectivos
api.post('/periodo-lectivo-activo', [autenticarControl.autenticado, sesionControl.actualiza], periodosLectivosControl.periodoLectivoActivo)

//End Point Matricula
api.post('/guardar-matricula',matriculaControl.guardarMatricula)
api.post('/encontrar-matricula',matriculaControl.encontrarMatricula)


//End Point Carreras
api.post('/leer-carrera',carreraControl.leerCarrera)


//EndPoint Eventos
api.post('/leer-eventos',eventosControl.leer)
api.post('/crear-eventos',eventosControl.crear)

// asignaturas
api.post('/contar-asignaturas', asignaturasControl.contarAsignaturas)
api.post('/leer-asignaturas-periodo-academico', asignaturasControl.leerAsignaturasPeriodoAcademico)

// docentesAsignaturas
api.post('/contar-docentes-asignaturas', docentesAsignaturasControl.contarDocentesAsignaturas)
api.post('/contar-docentes-asignaturas-paralelos', docentesAsignaturasControl.contarDocentesAsignaturasParalelo)
api.post('/leer-docentes-asignaturas-paralelos', docentesAsignaturasControl.leerDocenteAsignaturaParalelo)
api.post('/contar-horas-docentes', docentesAsignaturasControl.contarHorasDocentes)
api.post('/gestionar-docente-asignatura', docentesAsignaturasControl.gestionarDocenteAsignatura)
// docentes

api.post('/leer-docentes-carreras', docentesControl.leerDocentesCarreras)


// periodos académicos paralelos
api.post('/leer-periodos-academicos-paralelos', periodoAcademicosParalelosControl.leerPeriodosAcademicosParalelos)
module.exports = api
