'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PeriodosAcademicos', [
      {
        
        Institutos: '1717171717',
        Carreras: 'GABRIELA',
        mallas: 'ESTEFANÍA',
        PeriodosAcademicos: 'RIVERA',
        Asignaturas: 'SALAZAR',
        Jornadas: 'ger@ss.aa',
        Paralelos: '123',
      },
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PeriodosAcademicos', null, {});
  }
};
