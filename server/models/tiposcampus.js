'use strict';
module.exports = (sequelize, DataTypes) => {
  const TiposCampus = sequelize.define('TiposCampus', {
    descripcion:{
      type: DataTypes.STRING(20), 
      allowNull: false,
      unique: false,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        len: [3-20],
        notEmpty: true,
      } 
    },
    estado: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: true
    }
  }, {});
 
  TiposCampus.associate = function(models) {
    // associations can be defined here
        TiposCampus.hasMany(models.DireccionesInstitutos)
      };

  return TiposCampus;
};