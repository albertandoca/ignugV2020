'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TiposCampus', [
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
    return queryInterface.bulkDelete('TiposCampus', null, {});
  }
};