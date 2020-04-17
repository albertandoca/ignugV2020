'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UnidadesCurriculares', [
      {
        detalle: 'Básica',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Profesional',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Titulación',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UnidadesCurriculares', null, {});
  }
};