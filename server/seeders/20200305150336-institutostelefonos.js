'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('Institutos Telefonos', [
      {
        codigoPais: '593',
        numero: '0943587126',
        operadora: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Institutos Telefonos', null, {});
  }
};
