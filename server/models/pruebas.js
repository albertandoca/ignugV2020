'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pruebas = sequelize.define('Pruebas', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Pruebas.associate = function(models) {
    // associations can be defined here
  };
  return Pruebas;
};