'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Instalaciones', [
        {
          idInstituto: 1,
          idLugar: 3,
          idTipoInstalacion: 1,
          direccion: 'Garcia Moreno y Ambato',
          codigoPostal: '444333',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 1,
          idLugar: 3,
          idTipoInstalacion: 2,
          direccion: 'Garcia Moreno y Ambato',
          codigoPostal: '444333',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 2,
          idLugar: 3,
          idTipoInstalacion: 3,
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
