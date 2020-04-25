'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatriculasAnuladas = sequelize.define('MatriculasAnuladas', {
    pdfSolicitud: DataTypes.STRING,
    pdfRespuesta: DataTypes.STRING,
    creadoPor: DataTypes.STRING,
    modificadoPor: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  MatriculasAnuladas.associate = function(models) {
    // associations can be defined here
  };
  return MatriculasAnuladas;
};