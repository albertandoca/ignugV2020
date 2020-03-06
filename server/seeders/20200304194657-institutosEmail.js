'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('InstitutosEmails', [
      {
        InstitutoId: 1,
        eMail: 'aaa@aaa.aa',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InstitutoId: 1,
        eMail: 'aaa@aaa.ab',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InstitutoId: 1,
        eMail: 'aaa@aaa.ac',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('InstitutosEmails', null, {});
  }
};