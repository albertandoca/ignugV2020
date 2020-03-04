'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mallas', [
      {
        descripcion: 'Descripcion Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        numeroDePeriodoAcademico:5,
        estado: false,
      },
      {
        descripcion: 'Descripcion Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        numeroDePeriodoAcademico: 5,
        estado: false,
      },
      {
        descripcion: 'Descripcion Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        numeroDePeriodoAcademico: 5,
        estado: false,
      },
      {
        descripcion: 'Descripcion Malla',
        fecha: new Date(),
        urlAcreditacion: 'Archivo Acreditacion',
        numeroDePeriodoAcademico: 5,
        estado: false,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mallas', null, {});
  }
};