'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mallas', [
      {
        idCarrera: 1,
        idModalidad: 3,
        detalle: 'RPC-SO-2 2-No.427 -2017',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        titulo: 'Tecnólogo Superior en Desarrollo de Software',
        numeroPeriodoAcademico:5,
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 1,
        idModalidad: 2,
        detalle: 'detalle Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        titulo: 'tecnologo',
        numeroPeriodoAcademico: 5,
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 2,
        idModalidad: 3,
        detalle: 'detalle Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        titulo: 'tecnologo',
        numeroPeriodoAcademico: 5,
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 2,
        idModalidad: 4,
        detalle: 'detalle Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        titulo: 'tecnologo',
        numeroPeriodoAcademico: 5,
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mallas', null, {});
  }
};