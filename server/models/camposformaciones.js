'use strict';
module.exports = (sequelize, DataTypes) => {
  const CamposFormaciones = sequelize.define('CamposFormaciones', {
    detalle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        notEmpty: true
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {});
  CamposFormaciones.associate = function(models) {
    CamposFormaciones.hasOne(models.Asignaturas,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idCampoFormacion',
        allowNull: false,
        unique: false
      },
      sourceKey:'id'
    })
  };
  return CamposFormaciones;
};