'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UnidadesCurriculares', [
      {
        detalle: 'tipoa',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'tipob',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'tipoc',
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