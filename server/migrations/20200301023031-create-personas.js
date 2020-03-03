'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identificacion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      primerNombre: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      segundoNombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellidoPaterno: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellidoMaterno: {
        allowNull: false,
        type: Sequelize.STRING
      },
      emailPersonal: {
        allowNull: false,
        type: Sequelize.STRING
      },
      emailInstitucional: {
        allowNull: false,
        type: Sequelize.STRING
      },
      psw: {
        allowNull: false,
        type: Sequelize.STRING
      },
      semilla: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cambioPsw: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      enLinea: {
        allowNull: false,
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
    return queryInterface.dropTable('Personas');
  }
};