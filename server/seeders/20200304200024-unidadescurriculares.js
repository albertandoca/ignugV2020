'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UnidadesCurrilares', [
      {
        descripcion: 'tipo',
        estado: false,
      },
      {
        descripcion: 'tipo',
        estado: false,
      },
      {
        descripcion: 'tipo',
        estado: false,
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UnidadesCurrilares', null, {});
  }
};