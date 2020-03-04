'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paralelos = sequelize.define('Paralelos', {
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
  Paralelos.associate = function(models) {
    // associations can be defined here
  };
  return Paralelos;
};