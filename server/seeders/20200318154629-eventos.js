'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Eventos', [{
        organizador: 'Diseño de modas',
        titulo: 'Desfile de modas',
        fecha: new Date(),
        hora: 15,
        minuto: 0,
        lugar: 'Palacio de cristal Itchimbia',
        urlImagenEvento: '-esZR4ukVGhn2d2dMTJutDKr.jpeg',
        descripcion: 'Desfile de modas organizado por la carrera de Diseño de modas conmemorando ..........',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organizador: 'Departamento administrativo',
        titulo: 'Baile Inicio de semestre',
        fecha: new Date(),
        hora: 18,
        minuto: 30,
        lugar: 'Av. Gran Colombia, Quito 170136',
        descripcion: 'El baile representa el inicio del nuevo semestre y el fin del anterior se llevara a cabo en ........',
        urlImagenEvento: 'TFV9ayNjF6YjJ7E4NnXAQ0Xk.jpg',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organizador: 'Instituto de idiomas',
        titulo: 'Dia de la amistad',
        fecha: new Date(),
        hora: 14,
        minuto: 0,
        lugar: 'Yavirac Instituto',
        descripcion: 'Evento organizado por las autoridades del instituto, se llevara a cado en el patio central con la visita de varios artistas',
        urlImagenEvento: '2VWb3vjSobpnrwHzF1ysJkbr.jpg',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organizador: 'Departamento administrativo',
        titulo: 'Reconocimiento a docentes',
        fecha: new Date(),
        hora: 13,
        minuto: 30,
        lugar: 'Yavirac Instituto',
        descripcion: 'Se gratificará el trabajo de los docentes de las siguiente asignaturas ..... y carreras...',
        urlImagenEvento: 'S6nEL0xCo8rfPXHX3iKgn85v.jpg',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Eventos', null, {});
  }
};
