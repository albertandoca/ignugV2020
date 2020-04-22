'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PersonasRoles', [
      {
        idPersona: 1,
        idRol: 1,
        idInstituto: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 1,
        idRol: 2,
        idInstituto: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        idRol: 1,
        idInstituto: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 1,
        idRol: 3,
        idInstituto: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        idRol: 3,
        idInstituto: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 3,
        idRol: 3,
        idInstituto: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('PersonasRoles', null, {});
  }
};
