'use strict';

module.exports = {
 
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Carreras', [
        {
          idInstituto: 3,
          detalle: 'Desarrollo de Software',
          urlAcreditacion: 'http//acreditacion.com',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 2,
          detalle: 'Diseño de Modas',
          urlAcreditacion: 'http//acreditacion.com',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 1,
          detalle: 'Arte Culinario',
          urlAcreditacion: 'http//acreditacion.com',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idInstituto: 1,
          detalle: 'Marketing',
          urlAcreditacion: 'http//acreditacion.com',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Carreras', null, {});
    }
  };