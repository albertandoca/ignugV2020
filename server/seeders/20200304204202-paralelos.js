'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkInsert('Paralelos', [{
        detalle: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'C',
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
