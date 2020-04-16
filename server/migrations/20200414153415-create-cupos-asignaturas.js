'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CuposAsignaturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pdfTituloGrado: {
        type: Sequelize.STRING
      },
      pdfAsignacionCupo: {
        type: Sequelize.STRING
      },
      pdfCedula: {
        type: Sequelize.STRING
      },
      pdfSolicitud: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      creadoPor: {
        type: Sequelize.INTEGER
      },
      modificadoPor: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('CuposAsignaturas');
  }
};