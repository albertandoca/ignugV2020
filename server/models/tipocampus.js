'use strict';
module.exports = (sequelize, DataTypes) => {
  const TipoCampus = sequelize.define('TipoCampus', {
    descripcion:{
      type: DataTypes.STRING(20), 
      allowNull: false,
      unique: false,
      notEmpty: true,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        len: [15, 30]
      } },
    estado: {
      type: DataTypes.ENUM,
      values: ['Activo', 'Actualiza', 'Inactivo'], 
      allowNull: false,
      default: 'Actualiza'
    }
  }, {});
 
  TipoCampus.associate = function(models) {
    // associations can be defined here
        TipoCampus.hasMany(models.Direcciones)
      };

  return TipoCampus;
};