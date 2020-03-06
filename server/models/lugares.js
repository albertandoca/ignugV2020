'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lugares = sequelize.define('Lugares', {
<<<<<<< HEAD:server/models/lugares.js
    padre: {
      type: DataTypes.STRING(100),
=======
    descripcion: {
      type: DataTypes.STRING(),
>>>>>>> master:server/models/lugares.js
      allowNull: false,
      unique: true,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        notEmpty: true,
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    },
    idPadre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        notEmpty: true,
      }
    }
  }, {});
  Lugares.associate = function(models) {
    // associations can be defined here
  };
  return Lugares;
};