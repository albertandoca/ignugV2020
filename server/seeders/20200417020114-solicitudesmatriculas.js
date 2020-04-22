'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('SolicitudesMatriculas', [
        {
          pdfSolicitud: '4eo3zg2CEF6MSNs9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASFD12',
          idEstudiante:10,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pdfSolicitud: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASD12',
          idEstudiante:11,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pdfSolicitud: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          codigoSolicitud: 'ASD12',
          idEstudiante:7,
          idPeriodoLectivo:3,
          estado: 'Aplicado',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('SolicitudesMatriculas', null, {});

  }
};