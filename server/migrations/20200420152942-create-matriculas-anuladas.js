'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MatriculasAnuladas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pdfSolicitud: {
        type: Sequelize.STRING
      },
      pdfRespuesta: {
        type: Sequelize.STRING
      },
      creadoPor: {
        type: Sequelize.STRING
      },
      modificadoPor: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MatriculasAnuladas');
  }
};