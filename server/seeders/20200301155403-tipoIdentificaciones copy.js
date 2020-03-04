'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('telefonos', [
      {
        codigopais: '593',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: '125417281218',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        operadora: 'telefonia',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoIdentificaciones', null, {});
  }
};
