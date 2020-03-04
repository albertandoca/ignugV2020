'use strict';
module.exports = (sequelize, DataTypes) => {
  const PeriodosAcademicos = sequelize.define('PeriodosAcademicos', {
    nivel: {
      type: DataTypes.STRING(50),
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
        len: [5, 20]

      }
    },
    numero: {
      type: DataTypes.INTEGER,
      validate: {
        is: /^[0-9]+$/i,
        

      }


    },
    estado: DataTypes.BOOLEAN   
  }, {});
  PeriodosAcademicos.associate = function(models) {
    // associations can be defined here
  };
  return PeriodosAcademicos;
};