'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('MatriculasAnuladas', [
        {
          idMatricula: 1,
          pdfSolicitud: "askjdabhsldjas.png",
          pdfRespuesta: "skdjsañasdasdñsad.png",
          creadoPor: 7,
          modificadoPor: 7,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('MatriculasAnuladas', null, {});
    
  }
};
