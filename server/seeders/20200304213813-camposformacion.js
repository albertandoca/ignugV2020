'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('CamposFormaciones', [
        {
          detalle: 'Fundamentos teóricos',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          detalle: 'Adaptacion e innovación tecnológica',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          detalle: 'Comunicación y lenguajes',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          detalle: 'Integración de saberes, contextos y cultura',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('CamposFormaciones', null, {});
    
  }
};
