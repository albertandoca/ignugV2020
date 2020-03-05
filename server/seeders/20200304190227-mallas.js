'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mallas', [
      {
        CarreraID: 1,
        descripcion: 'Descripcion Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        titulo: 'tecnologo',
        numeroDePeriodoAcademico:5,
        estado: false,
      },
      {
        CarreraID: 1,
        descripcion: 'Descripcion Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        titulo: 'tecnologo',
        numeroDePeriodoAcademico: 5,
        estado: false,
      },
      {
        CarreraID: 1,
        descripcion: 'Descripcion Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        titulo: 'tecnologo',
        numeroDePeriodoAcademico: 5,
        estado: false,
      },
      {
        CarreraID: 1,
        descripcion: 'Descripcion Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        titulo: 'tecnologo',
        numeroDePeriodoAcademico: 5,
        estado: false,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mallas', null, {});
  }
};