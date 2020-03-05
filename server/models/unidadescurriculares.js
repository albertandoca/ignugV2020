'use strict';
module.exports = (sequelize, DataTypes) => {
  const UnidadesCurrilares = sequelize.define('UnidadesCurrilares', {
    descripcion:{
      type: DataTypes.STRING(50), 
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        len: [5, 50],
        notEmpty: true,
      } },
    estado: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: true
    }
  }, {});
  UnidadesCurrilares.associate = function(models) {
    // associations can be defined here
        UnidadesCurrilares.hasOne(models.Asignaturas)
      };

  return UnidadesCurrilares;
};