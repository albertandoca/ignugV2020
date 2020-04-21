'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Matriculas', [
      {
      idEstudiante: 8,
      idAsignatura: 1,
      codigo: '2020_5_DS_MD_1',
      tipoMatricula: 'Ordinario',
      numeroMatricula: 'Primera',
      pdfMatricula: '_e9wEgcHSmntSdzxXjTpaJf0.pdf',
      creadoPor: 8,
      modificadoPor: 8,
      estado: true,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idEstudiante: 8,
      idAsignatura: 2,
      codigo: '2020_5_DS_IDS_1',
      tipoMatricula: 'Ordinario',
      numeroMatricula: 'Primera',
      pdfMatricula: '_e9wEgcHSmntSdzxXjTpaJf0.pdf',
      creadoPor: 8,
      modificadoPor: 8,
      estado: true,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idEstudiante: 8,
      idAsignatura: 3,
      codigo: '2020_5_DS_ADS_5',
      tipoMatricula: 'Ordinario',
      numeroMatricula: 'Primera',
      pdfMatricula: '_e9wEgcHSmntSdzxXjTpaJf0.pdf',
      creadoPor: 8,
      modificadoPor: 8,
      estado: true,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idEstudiante: 8,
      idAsignatura: 4,
      codigo: '2020_5_DS_FP_1',
      tipoMatricula: 'Ordinario',
      numeroMatricula: 'Primera',
      pdfMatricula: '_e9wEgcHSmntSdzxXjTpaJf0.pdf',
      creadoPor: 8,
      modificadoPor: 8,
      estado: true,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idEstudiante: 8,
      idAsignatura: 5,
      codigo: '2020_5_DS_DP_1',
      tipoMatricula: 'Ordinario',
      numeroMatricula: 'Primera',
      pdfMatricula: '_e9wEgcHSmntSdzxXjTpaJf0.pdf',
      creadoPor: 8,
      modificadoPor: 8,
      estado: true,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idEstudiante: 8,
      idAsignatura: 6,
      codigo: '2020_5_DS_FP_1',
      tipoMatricula: 'Ordinario',
      numeroMatricula: 'Primera',
      pdfMatricula: '_e9wEgcHSmntSdzxXjTpaJf0.pdf',
      creadoPor: 8,
      modificadoPor: 8,
      estado: true,
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Matriculas', null, {});
  }
};
