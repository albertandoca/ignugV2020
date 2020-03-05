'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('InstitutosEmails', [
      {
        InstitutoID: 1,
        eMail: 'Direccion de E-mail',
        estado: false,
      },
      {
        InstitutoID: 1,
        eMail: 'Direccion de E-mail',
        estado: false,
      },
      {
        InstitutoID: 1,
        eMail: 'Direccion de E-mail',
        estado: false,
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('InstitutosEmails', null, {});
  }
};