'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UnidadesCurriculares', [
      {
        detalle: 'Básica',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Profesional',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Titulación',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UnidadesCurriculares', null, {});
  }
};