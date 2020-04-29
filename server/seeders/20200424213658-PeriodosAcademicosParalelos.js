'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PeriodosAcademicosParalelos', [
      {
        detalle: 'Primero A I',
        estado: true,
        idMalla: 3,
        idPeriodoAcademico: 1,
        idParalelo: 1,
        idJornada: 1,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero B M',
        estado: true,
        idMalla: 3,
        idPeriodoAcademico: 1,
        idParalelo: 2,
        idJornada: 2,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero C I',
        estado: true,
        idMalla: 3,
        idPeriodoAcademico: 1,
        idParalelo: 3,
        idJornada: 1,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero B V',
        estado: true,
        idMalla: 3,
        idPeriodoAcademico: 1,
        idParalelo: 2,
        idJornada: 3,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Segundo A N',
        estado: true,
        idMalla: 3,
        idPeriodoAcademico: 2,
        idParalelo: 1,
        idJornada: 4,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero A N',
        estado: true,
        idMalla: 3,
        idPeriodoAcademico: 2,
        idParalelo: 1,
        idJornada: 4,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero B N',
        estado: true,
        idMalla: 3,
        idPeriodoAcademico: 1,
        idParalelo: 2,
        idJornada: 4,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero B M',
        estado: true,
        idMalla: 3,
        idPeriodoAcademico: 1,
        idParalelo: 2,
        idJornada: 1,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero C M',
        estado: true,
        idMalla: 1,
        idPeriodoAcademico: 1,
        idParalelo: 3,
        idJornada: 1,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero A M',
        estado: true,
        idMalla: 3,
        idPeriodoAcademico: 1,
        idParalelo: 1,
        idJornada: 2,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero A M',
        estado: true,
        idMalla: 1,
        idPeriodoAcademico: 1,
        idParalelo: 1,
        idJornada: 2,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero A V',
        estado: true,
        idMalla: 1,
        idPeriodoAcademico: 1,
        idParalelo: 1,
        idJornada: 3,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        detalle: 'Primero C N',
        estado: true,
        idMalla: 1,
        idPeriodoAcademico: 1,
        idParalelo: 3,
        idJornada: 4,
        idPeriodoLectivo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('PeriodosAcademicosParalelos', null, {});

  }
};