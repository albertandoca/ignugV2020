'use strict';
module.exports = (sequelize, DataTypes) => {
  const TiposInstalaciones = sequelize.define('TiposInstalaciones', {
    descripcion:{
      type: DataTypes.STRING(20), 
      allowNull: true,
      unique: true,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        len: [3,20],
        notEmpty: true,
      } 
    },
    estado: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: true
    }
  }, {});
 
  TiposInstalaciones.associate = function(models) {
    // associations can be defined here
        TiposInstalaciones.hasMany(models.Instalaciones, {
          foreignKey: {
            type: DataTypes.INTEGER,
            name: 'idTipoInstalacion',
            allowNull: false,
            unique: false
          },
          sourceKey: 'id'
        })
      };

  return TiposInstalaciones;
};