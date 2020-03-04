'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('institutosEmail', [
      {
        eMail: 'Direccion de E-mail',
        estado: false,
      },
      {
        eMail: 'Direccion de E-mail',
        estado: false,
      },
      {
        eMail: 'Direccion de E-mail',
        estado: false,
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('institutosEmail', null, {});
  }
};