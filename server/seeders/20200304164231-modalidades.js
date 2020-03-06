'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkInsert('Modalidades', [{
        descripcion: 'Presencial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'SemiPresencial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Dual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Distancia',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('Modalidades', null, {});

  }
};
