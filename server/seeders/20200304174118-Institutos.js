'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkInsert('Institutos', [{
        razonSocial: 'Yavirac',
        ruc: '1234567891235',
        urlAcreditacion: 'http//acreditacion.com',
        urlOrganigrama: 'http//acreditacion.com',
        urlStatuto: 'http//acreditacion.com',
        categoria: 'Público',
        urlLogotipo:'https://sequ',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('Institutos', null, {});
  }
};
