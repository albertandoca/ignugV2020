'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CamposFormacion', [
      {
        detalle: 'Fundamentos teóricos',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Adaptación e inovación tecnológica',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Comunicación y lenguajes',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Integración de saberes, conotextos y cultura',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {
      // freezeTableName: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CamposFormacion', null, {});
  }
};