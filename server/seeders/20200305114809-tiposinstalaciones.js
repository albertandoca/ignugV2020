'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TiposInstalaciones', [
      {
        detalle: 'Matriz',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Campus',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Extensión',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TiposInstalaciones', null, {});
  }
};