'use strict';
module.exports = (sequelize, DataTypes) => {
  const PeriodosLectivos = sequelize.define('PeriodosLectivos', {
    descripcion: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true
    },
    anio: {
      type: DataTypes.STRING(4),
      allowNull: false,
      validate: {
        is: /^[0-9]+$/i,
        len: [4,4]
      }
    },
    periodo: {
      type: DataTypes.STRING(2),
      allowNull: false,
      validate: {
        is: /^[0-9]+$/i,
        len: [2,2]
      }
    },
    fechaInicio: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    fechaFin: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  PeriodosLectivos.associate = function(models) {
    // associations can be defined here
  };
  return PeriodosLectivos;
};