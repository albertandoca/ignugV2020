'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstitutosTelefonos = sequelize.define('InstitutosTelefonos', {
    codigoPais: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        is: /^[0-9]+$/i, 
      }
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        is: /^[0-9]+$/i, 
      }
    },
    operadora: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        is: /^[a-zA-Z]+$/i,
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    },
     
  }, {});
  InstitutosTelefonos.associate = function(models) {
    InstitutosTelefonos.belongTo(models.Institutos)
  };
  return InstitutosTelefonos;
};