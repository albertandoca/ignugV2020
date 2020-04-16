'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('Roles', [
      {
        detalle: 'Coordinador académico',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Coordinador de carrera',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Docente',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Estudiante',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Sistemas',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Administrador Sistema',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Secretaría General',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Administrativo',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
