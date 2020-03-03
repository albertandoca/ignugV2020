'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pruebas', [{
      equipo: 'El Nacional',
      jugador: 'Pepito Pérez',
      edad: 20,
      fecha: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      equipo: 'El Nacional',
      jugador: 'Pepito Pérez',
      edad: 20,
      fecha: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      equipo: 'El Nacional',
      jugador: 'Pepito Pérez',
      edad: 20,
      fecha: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      equipo: 'El Nacional',
      jugador: 'Pepito Pérez',
      edad: 20,
      fecha: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      equipo: 'El Nacional',
      jugador: 'Pepito Pérez',
      edad: 20,
      fecha: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pruebas', null, {});
  }
};
