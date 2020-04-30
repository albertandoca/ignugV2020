'use strict';
module.exports = (sequelize, DataTypes) => {
  const PeriodosAcademicosParalelos = sequelize.define('PeriodosAcademicosParalelos', {
    detalle: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[A-ZA-Z0-9 -_áéíóúñüÁÉÍÓÚÑÜ/#&.]+$/i,
        notEmpty: true
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {});
  PeriodosAcademicosParalelos.associate = function(models) {
    // associations can be defined here
    PeriodosAcademicosParalelos.belongsTo(models.Mallas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idMalla',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    PeriodosAcademicosParalelos.belongsTo(models.PeriodosAcademicos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idPeriodoAcademico',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    PeriodosAcademicosParalelos.belongsTo(models.Paralelos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idParalelo',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    PeriodosAcademicosParalelos.belongsTo(models.Jornadas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idJornada',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    PeriodosAcademicosParalelos.belongsTo(models.PeriodosLectivos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idPeriodoLectivo',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
  };
  return PeriodosAcademicosParalelos;
};