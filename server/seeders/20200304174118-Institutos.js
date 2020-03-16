'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Institutos', [
      {
        razonSocial: 'Yavirac',
        ruc: '1234567891235',
        urlResolucion: 'http//Resolucion.com',
        categoria: 'Público',
        urlLogotipo:'https://sequ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        razonSocial: 'Gran Colombia',
        ruc: '1234567891237',
        urlResolucion: 'http//Resolucion1.com',
        categoria: 'Público',
        urlLogotipo:'https://sequ1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('Institutos', null, {});
  }
};
