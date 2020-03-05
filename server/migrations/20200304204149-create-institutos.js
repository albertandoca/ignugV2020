'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Institutos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      razonSocial: {
        type: Sequelize.STRING
      },
      ruc: {
        type: Sequelize.STRING
      },
      urlAcreditacion: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      urlLogotipo: {
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
    return queryInterface.dropTable('Institutos');
  }
};