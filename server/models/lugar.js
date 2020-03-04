'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lugar = sequelize.define('Lugar', {
    padre: {
      type: DataTypes.STRING(50), 
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
      }
    }
  }, {});
  Lugar.associate = function(models) {
    // associations can be defined here
  };
  return Lugar;
};