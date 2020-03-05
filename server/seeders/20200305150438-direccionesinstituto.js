'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('DireccionInstitutos', [
        {
        id: '',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        idInstituto: '',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        idTipoCampus:'',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          direccion: 'Marianas de jesus',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          direccion: 'Centro Historico de Quito',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
            direccion: 'La Colon',
            estado: true,
            createdAt: new Date(),
            updatedAt: new Date()
       },
       {
            codigoPostal: '703564',
            estado: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          codigoPostal: '703578',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        codigoPostal: '703578',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('DireccionesInstituto', null, {});
  }
};
