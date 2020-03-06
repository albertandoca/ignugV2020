'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('InstitutosTelefonos', [
      {
        InstitutoId: 1,
        codigoPais: '593',
        numero: '0943587126',
        operadora: 'Claro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InstitutoId: 1,
        codigoPais: '593',
        numero: '0943587127',
        operadora: 'Claro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InstitutoId: 1,
        codigoPais: '593',
        numero: '0943587128',
        operadora: 'Claro',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('InstitutosTelefonos', null, {});
  }
};
