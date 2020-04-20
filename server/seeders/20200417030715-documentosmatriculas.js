'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('DocumentosMatriculas', [
        {
          pdfTituloGrado:'4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
          pdfAsignacionCupo:'4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
          pdfCedula:'4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
          idEstudiante:10,
          idCarrera:1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pdfTituloGrado:'4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
          pdfAsignacionCupo:'4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
          pdfCedula:'4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
          idEstudiante:11,
          idCarrera:1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pdfTituloGrado:'4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
          pdfAsignacionCupo:'4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
          pdfCedula:'4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
          idEstudiante:7,
          idCarrera:1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('DocumentosMatriculas', null, {});
    
  }
};
