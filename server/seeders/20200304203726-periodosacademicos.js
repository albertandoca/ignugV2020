'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PeriodosAcademicos', [
      {
        nivel: 'Primero',
        numero: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Segundo',
        numero: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Tercero',
        numero: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Cuarto',
        numero: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Quinto',
        numero: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Sexto',
        numero: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PeriodosAcademicos', null, {});
  }
};
