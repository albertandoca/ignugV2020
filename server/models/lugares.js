'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lugares = sequelize.define('Lugares', {
    descripcion: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        notEmpty: true,
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    },
    idPadre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isNumber: true,
        notEmpty: true,
      }
    }
  }, {});
  Lugares.associate = function(models) {
    // associations can be defined here
  };
  return Lugares;
};