'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      return queryInterface.bulkInsert('Matriculas', [
        {
          idEstudiante: 7,
          idAsignatura: 1,
          codigo:'2020_3_DS_MD_1',
          tipoMatricula: 'Ordinaria',
          numeroMatricula: 'Primera',
          pdfMatricula: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          creadoPor:7,
          modificadoPor:7,
          estado:true
        },
        {
          idEstudiante: 7,
          idAsignatura: 2,
          codigo:'2020_3_DS_MD_1',
          tipoMatricula: 'Ordinaria',
          numeroMatricula: 'Primera',
          pdfMatricula: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          creadoPor:7,
          modificadoPor:7,
          estado:true
        },
        {
          idEstudiante: 7,
          idAsignatura: 3,
          codigo:'2020_3_DS_MD_1',
          tipoMatricula: 'Ordinaria',
          numeroMatricula: 'Primera',
          pdfMatricula: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          creadoPor:7,
          modificadoPor:7,
          estado:true
        },
        {
          idEstudiante: 7,
          idAsignatura: 4,
          codigo:'2020_3_DS_MD_1',
          tipoMatricula: 'Ordinaria',
          numeroMatricula: 'Primera',
          pdfMatricula: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          creadoPor:7,
          modificadoPor:7,
          estado:true
        },
        {
          idEstudiante: 7,
          idAsignatura: 5,
          codigo:'2020_3_DS_MD_1',
          tipoMatricula: 'Ordinaria',
          numeroMatricula: 'Primera',
          pdfMatricula: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          creadoPor:7,
          modificadoPor:7,
          estado:true
        },
        {
          idEstudiante: 7,
          idAsignatura: 6,
          codigo:'2020_3_DS_MD_1',
          tipoMatricula: 'Ordinaria',
          numeroMatricula: 'Primera',
          pdfMatricula: '4eo3zg2CEF6MSffN9G8WPFSzF4.pdf',
          creadoPor:7,
          modificadoPor:7,
          estado:true
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Matriculas', null, {});
    
  }
};
