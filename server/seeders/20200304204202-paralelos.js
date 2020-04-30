'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkInsert('Paralelos', [{
        detalle: 'A',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'B',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'C',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkDelete('Paralelos', null, {});

  }
};
