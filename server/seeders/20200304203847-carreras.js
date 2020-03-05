'use strict';

module.exports = {
 
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('carreras', [
        {
          descripcion: 'tecnologica',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descripcion: 'ingenieria',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          urlAcreditacion: 'http//acreditacion.com'

        },
        {
          modalidad: 'dual',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          modalidad: 'presencial',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('carreras', null, {});
    }
  };