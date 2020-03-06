'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paralelos = sequelize.define('Paralelos', {
    descripcion: {
      type: DataTypes.STRING(5), 
      allowNull: false,
      validate: {
        is: /^[A-Z]+$/i,
        len: [1,5],
        notEmpty: true,
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue : true,
      allowNull: false
    }
  }, {});
  Paralelos.associate = function(models) {
    // associations can be defined here
  };
  return Paralelos;
};