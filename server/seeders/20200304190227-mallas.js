'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mallas', [
      {
        idCarrera: 3,
        idModalidad: 1,
        detalle: 'Descripcion Malla?',
        fecha: new Date(),
        titulo: 'Técnico Superior en Arte Culinario Ecuatoriano',
        numeroPeriodoAcademico:4,
        pdfResolucion:'Ga8zuhXFZeieZc6Esw-Fc7NI.pdf',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 4,
        idModalidad: 1,
        detalle: 'Descripcion Malla',
        fecha: new Date(),
        titulo: 'Técnico Superior en Control de Incendios y Operaciones de Rescate',
        numeroPeriodoAcademico: 5,
        pdfResolucion:'_e9wEgcHSmntSdzxXjTpaJf0.pdf',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 1,
        idModalidad: 1,
        detalle: 'Descripcion Malla',
        fecha: new Date(),
        titulo: 'Tecnólogo Superior en Desarrollo de Software',
        numeroPeriodoAcademico: 5,
        pdfResolucion:'eSXwTZ9FgS2686bGvDuumzdI.pdf',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 2,
        idModalidad: 1,
        detalle: 'Descripcion Malla',
        fecha: new Date(),
        titulo: 'Diseñador de Modas con nivel equivalente a Tecnología Superior',
        numeroPeriodoAcademico: 5,
        pdfResolucion:'1f9KaRdFXQxclt83OGHpVnZp.pdf',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 5,
        idModalidad: 1,
        detalle: 'Descripcion Malla',
        fecha: new Date(),
        titulo: 'Guía Nacional de Turismo con nivel equivalente a tecnología superior',
        numeroPeriodoAcademico: 4,
        pdfResolucion:'jvxrgk8BNXT7yIJDlr7Z0qpq.pdf',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 6,
        idModalidad: 1,
        detalle: 'Descripcion Malla',
        fecha: new Date(),
        titulo: 'Tecnólogo Superior en Marketing',
        numeroPeriodoAcademico: 6,
        pdfResolucion:'y37MkBMAWg9c8-VxxOV5fHOp.pdf',
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mallas', null, {});
  }
};