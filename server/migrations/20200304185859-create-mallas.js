'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mallas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      detalle: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      urlAcreditacion: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      numeroPeriodosAcademicos: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: DataTypes.BOOLEAN,
       
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
    return queryInterface.dropTable('Mallas');
  }
};