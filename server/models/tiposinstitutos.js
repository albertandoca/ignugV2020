'use strict';
module.exports = (sequelize, DataTypes) => {
  const TiposInstitutos = sequelize.define('TiposInstitutos', {
    descripcion: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        notEmpty: true
      }

    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  TiposInstitutos.associate = function(models) {
    // associations can be defined here
  };
  return TiposInstitutos;
};