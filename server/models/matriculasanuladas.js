'use strict';
module.exports = (sequelize, DataTypes) => {
  const matriculasAnuladas = sequelize.define('matriculasAnuladas', {
    pdfSolicitud: DataTypes.STRING,
    pdfRespuesta: DataTypes.STRING,
    updatedAt: DataTypes.STRING,
    createdAt: DataTypes.STRING
  }, {});
  matriculasAnuladas.associate = function(models) {
    // associations can be defined here
  };
  return matriculasAnuladas;
};