'use strict';
module.exports = (sequelize, DataTypes) => {
  const SolicitudesMatriculasAnuladas = sequelize.define('SolicitudesMatriculasAnuladas', {
    pdfSolicitud:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i,  
        notEmpty: true
      }
    },
    codigoSolicitud: 
    {
      type: DataTypes.STRING(),
      allowNull: false,
      validate:{
        is: /^[A-Za-z0-9 -_áéíóúñüÁÉÍÓÚÑÜ/#&.]+$/i,
        notEmpty:true
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  SolicitudesMatriculasAnuladas.associate = function(models) {
    // associations can be defined here
  };
  return SolicitudesMatriculasAnuladas;
};