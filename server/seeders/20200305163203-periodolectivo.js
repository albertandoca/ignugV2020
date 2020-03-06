'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PeriodosLectivos', [{
        descripcion: 'mayo 2019 - octubre 2109',
        anio: '2019',
        periodo: '01',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('PeriodosLectivos', null, {});
  }
};