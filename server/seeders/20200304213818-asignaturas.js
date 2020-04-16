'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Asignaturas', [
      
      {
        detalle: 'Matemáticas',
        creditos: 3,
        horasDocente: 1,
        horasPracticas: 2,
        horasAutonomas: 2,
        estado: true,
        idMalla: 1,
        idPeriodoAcademico: 1,
        idUnidadCurricular: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Programación',
        creditos: 3,
        horasDocente: 1,
        horasPracticas: 2,
        horasAutonomas: 2,
        estado: true,
        idMalla: 1,
        idPeriodoAcademico: 1,
        idUnidadCurricular: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Lenguaje',
        creditos: 3,
        horasDocente: 1,
        horasPracticas: 2,
        horasAutonomas: 2,
        estado: true,
        idMalla: 1,
        idPeriodoAcademico: 1,
        idUnidadCurricular: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Geometría',
        creditos: 3,
        horasDocente: 1,
        horasPracticas: 2,
        horasAutonomas: 2,
        estado: true,
        idMalla: 1,
        idPeriodoAcademico: 1,
        idUnidadCurricular: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Asignaturas', null, {});
  }
};

