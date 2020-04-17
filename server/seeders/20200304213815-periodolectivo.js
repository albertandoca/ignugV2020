'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PeriodosLectivos', [
      {
        detalle: 'mayo 2019 - octubre 2109',
        anio: '2019',
        periodo: '01',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      detalle: 'noviembre 2019 - abril 2020',
        anio: '2019',
        periodo: '01',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      detalle: 'mayo 2020 - octubre 2020',
        anio: '2019',
        periodo: '01',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      detalle: 'noviembre 2020 - abril 2021',
        anio: '2019',
        periodo: '01',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('PeriodosLectivos', null, {});
  }
};