'use strict';
module.exports = (sequelize, DataTypes) => {
  const matriculas = sequelize.define('matriculas', {
    codigo: DataTypes.STRING,
    tipoMatricula: DataTypes.STRING,
    numeroMatricula: DataTypes.STRING,
    pdfMatricula: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    updatedA: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});
  matriculas.associate = function(models) {
    // associations can be defined here
  };
  return matriculas;
};