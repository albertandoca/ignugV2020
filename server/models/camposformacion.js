'use strict';
module.exports = (sequelize, DataTypes) => {
  const CamposFormacion = sequelize.define('CamposFormacion', {
    detalle:{
      type: DataTypes.STRING(50), 
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        len: [5,50],
        notEmpty: true,
      } },
    estado: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: true
    }
  }, {});
  CamposFormacion.associate = function(models) {
    // associations can be defined here
        CamposFormacion.hasOne(models.Asignaturas, {
          foreignKey: {
            type: DataTypes.INTEGER,
            name: 'idCampoFormacion',
            allowNull: false,
            unique: false
          },
          sourceKey: 'id'
        })
      };

  return CamposFormacion;
};