'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Institutos', [
      {
        codigoIES: '1234',
        razonSocial: 'Yavirac',
        ruc: '1234567891235',
        urlResolucion: 'http//Resolucion.com',
        categoria: 'Público',
        urlLogotipo:'https://sequ',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoIES: '1235',
        razonSocial: 'Gran Colombia',
        ruc: '1234567891237',
        urlResolucion: 'http//Resolucion1.com',
        categoria: 'Público',
        urlLogotipo:'https://sequ1',
        estado: true,
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
