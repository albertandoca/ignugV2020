'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Jornadas', [
        {
          detalle: 'Intensiva',
          informacion: 'Se trabaja todo el dia dependiendo del horario',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
       },
       {
          detalle: 'Matutina',
          informacion: 'Se trabaja en la mañana de 7 a 12',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
       },
       {
          detalle: 'Vespertina',
          informacion: 'Se trabaja en la tarde de 12 a 5',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          detalle: 'Nocturna',
          informacion: 'Se trabaja en la noche de 5 a 9',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
           detalle: 'No aplica',
           informacion: 'Para carreras a distancia',
           estado: true,
           createdAt: new Date(),
           updatedAt: new Date()
          }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Jornadas', null, {});
    
  }
};
