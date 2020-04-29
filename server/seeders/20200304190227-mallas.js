'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mallas', [
      {
        idCarrera: 4,
        idModalidad: 1,
        detalle: 'RPC-SO-05-No.062-2018',
        fecha: '2018-01-31',
        titulo: 'Técnico Superior en Arte Culinario Ecuatoriano',
        numeroPeriodosAcademicos:4,
        pdfResolucion:'Ga8zuhXFZeieZc6Esw-Fc7NI.pdf',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 5,
        idModalidad: 1,
        detalle: 'RPC-SO-01-No.003-2020',
        fecha: '2020-01-08',
        titulo: 'Técnico Superior en Control de Incendios y Operaciones de Rescate',
        numeroPeriodosAcademicos: 5,
        pdfResolucion:'_e9wEgcHSmntSdzxXjTpaJf0.pdf',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 2,
        idModalidad: 1,
        detalle: 'RPC-SO-22-No.427-2017',
        fecha: '2017-06-28',
        titulo: 'Tecnólogo Superior en Desarrollo de Software',
        numeroPeriodosAcademicos: 5,
        pdfResolucion:'eSXwTZ9FgS2686bGvDuumzdI.pdf',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 3,
        idModalidad: 1,
        detalle: 'RPC-SO-10-No.179-2017',
        fecha: '2017-03-22',
        titulo: 'Diseñador de Modas con nivel equivalente a Tecnología Superior',
        numeroPeriodosAcademicos: 5,
        pdfResolucion:'1f9KaRdFXQxclt83OGHpVnZp.pdf',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 6,
        idModalidad: 1,
        detalle: 'RPC-SO-23-No.362-20',
        fecha: '2018-06-20',
        titulo: 'Guía Nacional de Turismo con nivel equivalente a tecnología superior',
        numeroPeriodosAcademicos: 4,
        pdfResolucion:'jvxrgk8BNXT7yIJDlr7Z0qpq.pdf',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCarrera: 7,
        idModalidad: 1,
        detalle: 'RPC-SO-34-No.631-2017',
        fecha: '2017-09-20',
        titulo: 'Tecnólogo Superior en Marketing',
        numeroPeriodosAcademicos: 6,
        pdfResolucion:'y37MkBMAWg9c8-VxxOV5fHOp.pdf',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mallas', null, {});
  }
};