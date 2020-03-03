'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoIdentificaciones', [
      {
        descripcion: 'Cédula',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Pasaporte',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Carné refugiado',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Otro',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoIdentificaciones', null, {});
  }
};
