'use strict';
module.exports = (sequelize, DataTypes) => {
  const DireccionesInstitutos = sequelize.define('DireccionesInstitutos', {
    direccion:{
      type: DataTypes.STRING(75),
      allowNull: true,
      validate: {
        isAlphanumeric: true,
      }
    },
    codigoPostal: {
      type: DataTypes.STRING(6),
      allowNull: true,
      validate: {
        is: /^[0-9]+$/i,
        len: [6-6]
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  DireccionesInstitutos.associate = function(models) {
    // associations can be defined here
    DireccionesInstitutos.belongsTo(models.Institutos)
    DireccionesInstitutos.belongsTo(models.Lugares)
    DireccionesInstitutos.belongsTo(models.TiposCampus)
  };

  return DireccionesInstitutos;
};