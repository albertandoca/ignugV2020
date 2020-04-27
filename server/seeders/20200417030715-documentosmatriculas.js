'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('DocumentosMatriculas', [
        {
          pdfTituloGrado:'etKIPZBjp0Mk5AGQVoPdwbmQ.pdf',
          pdfAsignacionCupo:'RsK_lYY_x9cWJUvi7RtGCF66.pdf',
          pdfCedula:'hRAEVlDD7lbXsN3lTKlA8u7K.pdf',
          idEstudiante:11,
          idCarrera:1,
          observacion:'',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pdfTituloGrado:'etKIPZBjp0Mk5AGQVoPdwbmQ.pdf',
          pdfAsignacionCupo:'RsK_lYY_x9cWJUvi7RtGCF66.pdf',
          pdfCedula:'hRAEVlDD7lbXsN3lTKlA8u7K.pdf',
          idEstudiante:11,
          idCarrera:3,
          observacion:'',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pdfTituloGrado:'etKIPZBjp0Mk5AGQVoPdwbmQ.pdf',
          pdfAsignacionCupo:'RsK_lYY_x9cWJUvi7RtGCF66.pdf',
          pdfCedula:'hRAEVlDD7lbXsN3lTKlA8u7K.pdf',
          idEstudiante:12,
          idCarrera:1,
          observacion:'',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pdfTituloGrado:'etKIPZBjp0Mk5AGQVoPdwbmQ.pdf',
          pdfAsignacionCupo:'RsK_lYY_x9cWJUvi7RtGCF66.pdf',
          pdfCedula:'hRAEVlDD7lbXsN3lTKlA8u7K.pdf',
          idEstudiante:7,
          idCarrera:1,
          observacion:'',
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