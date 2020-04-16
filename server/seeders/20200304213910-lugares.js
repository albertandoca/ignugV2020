'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lugares', [
      {
        codigo: '0',
        detalle: 'Padre',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        codigoLugar: '0'
      },
      {
        codigo: '1',
        detalle: 'Pichincha',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        codigoLugar: '0'
      },
      {
        codigo: '2',
        detalle: 'Quito',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        codigoLugar: '1'
      },
      {
        codigo: '3',
        detalle: 'Conocoto',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        codigoLugar: '2'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lugares', null, {});
  }
};
