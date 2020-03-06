'use strict';

module.exports = {
 
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Carreras', [
        {
          InstitutoId: 1,
          ModalidadeId: 3,
          descripcion: 'Desarrollo de Software',
          urlAcreditacion: 'http//acreditacion.com',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          InstitutoId: 1,
          ModalidadeId: 2,
          descripcion: 'Diseño de Modas',
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