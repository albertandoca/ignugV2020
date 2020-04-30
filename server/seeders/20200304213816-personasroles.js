'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PersonasRoles', [
      {
        idPersona: 1,
        idRol: 1,
        idInstituto: 1,
        idCarrera: null,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 1,
        idRol: 2,
        idInstituto: 3,
        idCarrera: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        idRol: 4,
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        idRol: 5,
        idInstituto: 2,
        idCarrera: 3,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        idRol: 1,
        idInstituto: 3,
        idCarrera: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 1,
        idRol: 5,
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 6,
        idRol: 6,
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        idRol: 5,
        idInstituto: 1,
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
        idInstituto: 3,
        idCarrera: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 7,
        idRol: 6,
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 10,
        idRol: 6,
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 11,
        idRol: 6,
        idInstituto: 1,
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
        idInstituto: 1,
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
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 10,
        idRol: 5,
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 11,
        idRol: 5,
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 11,
        idRol: 5,
        idInstituto: 2,
        idCarrera: 3,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 11,
        idRol: 5,
        idInstituto: 3,
        idCarrera: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 12,
        idRol: 5,
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 12,
        idRol: 5,
        idInstituto: 2,
        idCarrera: 3,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 13,
        idRol: 5,
        idInstituto: 2,
        idCarrera: 3,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 13,
        idRol: 5,
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 14,
        idRol: 5,
        idInstituto: 3,
        idCarrera: 2,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 14,
        idRol: 5,
        idInstituto: 2,
        idCarrera: 3,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 15,
        idRol: 5,
        idInstituto: 1,
        idCarrera: 1,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 15,
        idRol: 5,
        idInstituto: 2,
        idCarrera: 3,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Para solicitudes
      //27
      //Bryan roberto estudiante 
      {
        idPersona: 17,
        idRol: 6,
        idInstituto: 2,
        idCarrera: 3,
        urlDesignacion: 'sin url',
        observaciones: 'no hay observaciones',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Antonio fernando 28
      {
        idPersona: 18,
        idRol: 6,
        idInstituto: 3,
        idCarrera: 3,
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