'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkInsert('Modalidades', [{
        descripcion: 'Presencial',
      },
      {
        descripcion: 'SemiPresencial',
      },
      {
        descripcion: 'Dual',
      },
      {
        descripcion: 'Distancia',
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('Modalidades', null, {});

  }
};
