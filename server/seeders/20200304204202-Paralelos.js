'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkInsert('Paralelos', [{
        descripcion: 'A',
      },
      {
        descripcion: 'B',
      },
      {
        descripcion: 'C',
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkDelete('Paralelos', null, {});

  }
};
