'use strict';
module.exports = (sequelize, DataTypes) => {
  const Modalidades = sequelize.define('Modalidades', {
    descripcion: {
<<<<<<< HEAD
      type: DataTypes.STRING(20), 
      allowNull: false,
      validate: {
        is: /^[a-zA-Z]+$/i,
        notEmpty: true,
        len: [3-20],
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
>>>>>>> dccba40ba45acf61399ae4e87e84b90f9318d1d1
      }
    }
  }, {});
  Modalidades.associate = function(models) {
    // associations can be defined here
  };
  return Modalidades;
};