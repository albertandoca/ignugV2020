'use strict';

module.exports = {
 
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Carreras', [
        {
          idInstituto: 1,
          detalle: 'Desarrollo de Software',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 3,
          detalle: 'Diseño de Modas',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 2,
          detalle: 'Arte Culinario',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 2,
          detalle: 'Control de incendios',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 2,
          detalle: 'Guia nacional de turismo',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 2,
          detalle: 'Marketing',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 1,
          detalle: 'Analisis de sistemas',
          estado: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 1,
          detalle: 'Electricidad',
          estado: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 1,
          detalle: 'Electronica',
          estado: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Carreras', null, {});
    }
  };