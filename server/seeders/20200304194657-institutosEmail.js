'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('InstitutosEmails', [
      {
        idInstituto: 1,
        eMail: 'aaa@aaa.aa',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idInstituto: 1,
        eMail: 'aaa@aaa.ab',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idInstituto: 1,
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