'use strict';

module.exports = {
 
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Carreras', [
        {
          idInstituto: 1,
          descripcion: 'Desarrollo de Software',
          urlAcreditacion: 'http//acreditacion.com',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 1,
          descripcion: 'Diseño de Modas',
          urlAcreditacion: 'http//acreditacion.com',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Carreras', null, {});
    }
  };