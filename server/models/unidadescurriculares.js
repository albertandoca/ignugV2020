'use strict';
module.exports = (sequelize, DataTypes) => {
  const UnidadesCurriculares = sequelize.define('UnidadesCurriculares', {
    descripcion:{
      type: DataTypes.STRING(50), 
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        len: [5,50],
        notEmpty: true,
      } },
    estado: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: true
    }
  }, {});
  UnidadesCurriculares.associate = function(models) {
    // associations can be defined here
        UnidadesCurriculares.hasOne(models.Asignaturas)
      };

  return UnidadesCurriculares;
};