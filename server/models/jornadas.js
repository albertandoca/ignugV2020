'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jornadas = sequelize.define('Jornadas', {
    detalle: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          is: /^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]+$/i,
          len: [5, 50]
      }
    },
    informacion: 
    {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        is: /^[A-ZA-Z0-9 -_áéíóúñüÁÉÍÓÚÑÜ/#&.]+$/i,
        len: [5, 150]
      } 
    },
    estado: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: true
    }
  }, {});
  Jornadas.associate = function(models) {
  };
  return Jornadas;
};
