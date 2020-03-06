'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TiposInstalaciones', [
      {
        descripcion: 'Matriz',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Campus',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Extensión',
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