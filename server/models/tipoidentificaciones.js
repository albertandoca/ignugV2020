'use strict';
module.exports = (sequelize, DataTypes) => {
  const TipoIdentificaciones = sequelize.define('TipoIdentificaciones', {
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
  TipoIdentificaciones.associate = function(models) {
    // associations can be defined here
    TipoIdentificaciones.hasOne(models.Personas)
  };
  return TipoIdentificaciones;
};