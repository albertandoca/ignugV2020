'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paralelos = sequelize.define('Paralelos', {
    descripcion: {
<<<<<<< HEAD
      type: DataTypes.STRING(5), 
      allowNull: false,
      validate: {
        is: /^[A-Z]+$/i,
        len: [1-5],
        notEmpty: true,
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue : true,
      allowNull: false
=======
      type: DataTypes.STRING(50), 
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-zA-Z]+$/i,
        notEmpty: true,
      }
>>>>>>> dccba40ba45acf61399ae4e87e84b90f9318d1d1
    }
  }, {});
  Paralelos.associate = function(models) {
    // associations can be defined here
  };
  return Paralelos;
};