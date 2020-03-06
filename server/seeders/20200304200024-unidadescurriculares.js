'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UnidadesCurriculares', [
      {
        descripcion: 'tipoa',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'tipob',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'tipoc',
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