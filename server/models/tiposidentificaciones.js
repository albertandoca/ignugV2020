'use strict';
module.exports = (sequelize, DataTypes) => {
  const TiposIdentificaciones = sequelize.define('TiposIdentificaciones', {
    detalle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {
  });
  
  TiposIdentificaciones.associate = function(models) {
    // associations can be defined here
    TiposIdentificaciones.hasMany(models.Personas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idTipoIdentificacion',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
  };
  return TiposIdentificaciones;
};