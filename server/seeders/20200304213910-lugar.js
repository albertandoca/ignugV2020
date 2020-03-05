'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lugar', [
      {
        Padre: 'aqui va el Id del lugar',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lugar', null, {});
  }
};
