'use strict';
module.exports = (sequelize, DataTypes) => {
  const Carreras = sequelize.define('Carreras', {
    descripcion: {
      type: DataTypes.STRING(50),
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        notEmpty: true
      }
    },
    modalidad: {
      type:  DataTypes.STRING(50),
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        notEmpty: true

      }
    },
    estado: DataTypes.BOOLEAN   
  }, {});
  Carreras.associate = function(models) {
    // associations can be defined here
  };
  return Carreras;
};