'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mallas', [
      {
        CarreraId: 1,
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
        CarreraId: 1,
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
        CarreraId: 1,
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
        CarreraId: 1,
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