'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mallas = sequelize.define('Mallas', {
    descripcion: {
      type: DataTypes.STRING(20), 
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9 áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        len: [3, 20],
        notEmpty: true,
      }
    },
    fecha: {
      type: DataTypes.DATE, 
      allowNull: false,
      validate: {
        // is: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/i,
        isDate: true,
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
    titulo: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9 áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        notEmpty: true,
      }
    },
    numeroPeriodoAcademico: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      validate: {
        isNumeric: true
      } 
    },
    estado: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: true
    }
  }, {});
  Mallas.associate = function(models) {
    // associations can be defined here
    Mallas.belongsTo(models.Carreras)
    Mallas.hasMany(models.Asignaturas)
  };
  return Mallas;
};