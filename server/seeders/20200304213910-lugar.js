'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoIdentificaciones', [
      {
        Padre: 'aqui va el Id del lugar',
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
