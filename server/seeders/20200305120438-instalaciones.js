'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Instalaciones', [
        {
          InstitutoId: 1,
          LugareId: 3,
          TiposInstalacioneId: 1,
          direccion: 'Garcia Moreno y Ambato',
          codigoPostal: '444333',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Instalaciones', null, {});
  }
};
