'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lugar = sequelize.define('Lugar', {
    padre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        notEmpty: true,
      }
    },
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
  }
  }, {});
  Lugar.associate = function(models) {
    // associations can be defined here
  };
  return Lugar;
};