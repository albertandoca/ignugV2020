'use strict';
module.exports = (sequelize, DataTypes) => {
  const TiposInstitutos = sequelize.define('TiposInstitutos', {
    descripcion: {
      type: DataTypes.STRING(100),
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
      }
    },
    estado: DataTypes.STRING
  }, {});
  TiposInstitutos.associate = function(models) {
    // associations can be defined here
  };
  return TiposInstitutos;
};