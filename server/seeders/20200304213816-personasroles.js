'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PersonasRoles', [
      {
        idPersona: 1,
        idRol: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 1,
        idRol: 2,
        idCarrera: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        idRol: 1,
        idCarrera: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 1,
        idRol: 3,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        idRol: 3,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 3,
        idRol: 3,
        idCarrera: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 6,
        idRol: 4,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 7,
        idRol: 6,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 8,
        idRol: 6,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 9,
        idRol: 6,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 10,
        idRol: 4,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 11,
        idRol: 4,
        idCarrera: 1,
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
