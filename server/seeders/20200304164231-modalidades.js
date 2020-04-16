'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkInsert('Modalidades', [{
        detalle: 'Presencial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'SemiPresencial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Dual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Distancia',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('Modalidades', null, {});

  }
};
