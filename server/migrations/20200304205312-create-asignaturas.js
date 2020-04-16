'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Asignaturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IdMalla: {
        type: Sequelize.INTEGER
      },
      detalle: {
        type: Sequelize.STRING
      },
      creditos: {
        type: Sequelize.INTEGER
      },
      horasDocente: {
        type: Sequelize.INTEGER
      },
      horasPracticas: {
        type: Sequelize.INTEGER
      },
      horasAutonomas: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Asignaturas');
  }
};