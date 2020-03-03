'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pruebas = sequelize.define('Pruebas', {
    equipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    jugador: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {});
  Pruebas.associate = function(models) {
    // associations can be defined here
  };
  return Pruebas;
};