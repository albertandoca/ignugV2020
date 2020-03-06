'use strict';
module.exports = (sequelize, DataTypes) => {
  const Carreras = sequelize.define('Carreras', {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        notEmpty: true
      }
    },
    urlAcreditacion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
        notEmpty: true,
      }

    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }    
  }, {});

  Carreras.associate = function(models) {
    Carreras.hasMany(models.Mallas)
    Carreras.belongsTo(models.Institutos)
    Carreras.belongsTo(models.Modalidades)
  };


  return Carreras;
};