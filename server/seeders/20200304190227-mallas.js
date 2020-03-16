'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mallas', [
      {
        idCarrera: 1,
        idModalidad: 2,
        descripcion: 'Descripcion Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        titulo: 'tecnologo',
        numeroPeriodoAcademico:5,
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 1,
        idModalidad: 2,
        descripcion: 'Descripcion Malla',
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
        descripcion: 'Descripcion Malla',
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
        descripcion: 'Descripcion Malla',
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