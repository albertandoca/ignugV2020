'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoIdentificaciones', [
      {
        descripcion: 'Aqui va la descrippcion del tipo de instituto.....',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoIdentificaciones', null, {});
  }
};