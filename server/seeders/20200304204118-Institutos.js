'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkInsert('Institutos', [{
        razonSocial: 'Yavirac',
        ruc: '65a4sd654as',
        urlAcreditacion: 'http//acreditacion.com',
        categoria: 'publico',
        urlLogotipo:'https://sequelize.org/master/manual/getting-started.html'
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('Institutos', null, {});
  }
};
