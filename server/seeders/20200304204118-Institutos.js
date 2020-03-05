'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkInsert('Institutos', [{
<<<<<<< HEAD
        //InstitutosEmailId: 1,
        //InstitutosTelefonoId:1,
        razonSocial: 'Yavirac',
        ruc: '1234567891235',
        urlAcreditacion: 'http//acreditacion.com',
        urlOrganigrama: 'http//acreditacion.com',
        urlStatuto: 'http//acreditacion.com',
        categoria: 'Público',
        urlLogotipo:'https://sequ'
=======
        razonSocial: 'Yavirac',
        ruc: '65a4sd654as',
        urlAcreditacion: 'http//acreditacion.com',
        categoria: 'publico',
        urlLogotipo:'https://sequelize.org/master/manual/getting-started.html'
>>>>>>> dccba40ba45acf61399ae4e87e84b90f9318d1d1
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('Institutos', null, {});
  }
};
