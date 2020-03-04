'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('asignaturas', [
      {
        IdMalla: '12',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Aqui va la descripcion de la asignatura que se le asigno al estudiante',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        creditos: '50',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        horasDocente: '504',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        horasPracticas: '534',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        horasAutonomas: '534',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('asignaturas', null, {});
  }
};

