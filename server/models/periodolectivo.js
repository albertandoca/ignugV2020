'use strict';
module.exports = (sequelize, DataTypes) => {
  const periodoLectivo = sequelize.define('periodoLectivo', {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fechaInicio: {
      type: DataTypes.STRING(6),
      validate: {
        is: /^[0-9]+$/i,
    }
    },
    fechaFin: {
      type: DataTypes.STRING(6),
      validate: {
        is: /^[0-9]+$/i,
    }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  periodoLectivo.associate = function(models) {
    // associations can be defined here
  };
  return periodoLectivo;
};