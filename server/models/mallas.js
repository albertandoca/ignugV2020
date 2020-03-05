'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mallas = sequelize.define('Mallas', {
    descripcion: {
      type: DataTypes.STRING(20), 
      allowNull: false,
      unique: false,
      notEmpty: true,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        len: [15, 30]
      }
    },
    
    fecha: {
      type: DataTypes.DATE, 
      allowNull: false,
      unique: false,
      notEmpty: true,
      validate: {
        is: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/i,
        isDate: true
      } },
    urlAcreditacion: DataTypes.STRING,
    titulo: {
      type: DataTypes.STRING(20), 
      allowNull: false,
      unique: false,
      notEmpty: true,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        len: [8,25]
      } },
    numeroDePeriodoAcademico: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      unique: false,
      notEmpty: true,
      validate: {
        is: /^[0-9]+$/i,
        isNumeric: true
      } },
    estado: {
      type: DataTypes.ENUM,
      values: ['Activo', 'Actualiza', 'Inactivo'], 
      allowNull: false,
      default: 'Actualiza'
    }
  }, {});
  Mallas.associate = function(models) {
    // associations can be defined here
    Mallas.belongsTo(models.Carreras)
  };
  return Mallas;
};