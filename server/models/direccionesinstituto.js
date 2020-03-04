'use strict';
module.exports = (sequelize, DataTypes) => {
  const direccionesInstituto = sequelize.define('direccionesInstituto', {
    id: DataTypes.STRING,
    idInstitutos: DataTypes.STRING,
    idLugar: DataTypes.STRING,
    idTipoCampus: DataTypes.STRING,
    direccion:{
      type: DataTypes.STRING(25),
      validate: {
        isAlphanumeric: true,
      }
    },
    codigoPostal: {
      type: DataTypes.STRING(6),
      validate: {
        is: /^[0-9]+$/i,
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  direccionesInstituto.associate = function(models) {
    // associations can be defined here
  };
  return direccionesInstituto;
};