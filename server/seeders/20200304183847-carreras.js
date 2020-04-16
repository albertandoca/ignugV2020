'use strict';

module.exports = {
 
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Carreras', [
        {
          idInstituto: 3,
          detalle: 'Desarrollo de Software',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 2,
          detalle: 'Diseño de Modas',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 1,
          detalle: 'Arte Culinario',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 1,
          detalle: 'Marketing',
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