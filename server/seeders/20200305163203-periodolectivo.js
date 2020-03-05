'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PeriodosLectivos', [{
        id: '',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion:'',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaInicio:'20/19/2020',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaInicio:'20/19/2020',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('PeriodosLectivos', null, {});
  }
};