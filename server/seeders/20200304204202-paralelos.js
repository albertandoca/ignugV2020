'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkInsert('Paralelos', [{
        descripcion: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'C',
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
