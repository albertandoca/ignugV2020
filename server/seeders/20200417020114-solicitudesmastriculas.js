'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('SolicitudesMatriculas', [
        //Juan software
        {
          pdfSolicitud: '4eo3zg2CEF6MSNs9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASFD12',
          idMalla:3,
          idEstudiante:11,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Juan arte culinario
        {
          pdfSolicitud: '4eo3zg2CEF6MSNs9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASFD12',
          idMalla:1,
          idEstudiante:11,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Pedro Softw
        {
          pdfSolicitud: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASD12',
          idMalla:3,
          idEstudiante:12,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Kevin sofware
        {
          pdfSolicitud: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASD12',
          idMalla:3,
          idEstudiante:7,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Karina software
        {
          pdfSolicitud: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASD12',
          idMalla:3,
          idEstudiante:10,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Karina marketing
        {
          pdfSolicitud: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASD12',
          idMalla:6,
          idEstudiante:10,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
       /* // Bryan roberto turismo 4 nivel
        {
          pdfSolicitud: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASD12',
          idMalla:5,
          idEstudiante:27,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Antonio fernando modas 4 to nivel
        {
          pdfSolicitud: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASD12',
          idMalla:4,
          idEstudiante:28,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        // */
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('SolicitudesMatriculas', null, {});

  }
};