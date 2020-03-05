'use strict';
module.exports = (sequelize, DataTypes) => {
  const PeriodosLectivos = sequelize.define('PeriodosLectivos', {
    descripcion: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    fechaInicio: {
      type: DataTypes.Date,
      validate: {
        isDate: true
      }
    },
    fechaFin: {
      type: DataTypes.Date,
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