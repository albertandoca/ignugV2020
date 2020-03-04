'use strict';
module.exports = (sequelize, DataTypes) => {
  const Telefonos = sequelize.define('Telefonos', {
    codigopais: {
      type: DataTypes.INTEGER,
      validate: {
        is: /^[0-9]+$/i,

      }
    }, 
    numero: {
      type: DataTypes.INTEGER,
      validate: {
        is: /^[0-9]+$/i,
      }
    },
    operadora: {
      type: DataTypes.STRING(50),
      validate: {
        is: /^[a-zA-Z]+$/i,

      }

    },
    estado: DataTypes.BOOLEAN
  }, {});
  Telefonos.associate = function(models) {
    // associations can be defined here
  };
  return Telefonos;
};