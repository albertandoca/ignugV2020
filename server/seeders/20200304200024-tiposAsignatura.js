'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tiposAsignatura', [
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
    return queryInterface.bulkDelete('tiposAsignatura', null, {});
  }
};