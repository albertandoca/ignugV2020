'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lugares', [
      {
        descripcion: 'Pichincha',
        idPadre: 0,
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Quito',
        idPadre: 1,
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Conocoto',
        idPadre: 2,
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
     
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lugares', null, {});
  }
};
