'use strict';
module.exports = (sequelize, DataTypes) => {
  const TiposIdentificaciones = sequelize.define('TiposIdentificaciones', {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  TiposIdentificaciones.associate = function(models) {
    // associations can be defined here
    TiposIdentificaciones.hasOne(models.Personas)
  };
  return TiposIdentificaciones;
};