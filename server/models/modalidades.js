'use strict';
module.exports = (sequelize, DataTypes) => {
  const Modalidades = sequelize.define('Modalidades', {
    descripcion: {
      type: DataTypes.STRING(50), 
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-zA-Z]+$/i,
        notEmpty: true,
      }
    }
  }, {});
  Modalidades.associate = function(models) {
    // associations can be defined here
  };
  return Modalidades;
};