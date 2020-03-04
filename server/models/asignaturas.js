'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asignaturas = sequelize.define('Asignaturas', {
    IdMalla:{
      type : DataTypes.INTEGER(2),
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
      }
    },
    descripcion:{
      type: DataTypes.STRING(100),
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
        len: [5, 20]
      }
    },
    creditos: {
      type: DataTypes.INTEGER(9),
      validate: {
        is: /^[0-9]+$/i,
      }
    },
    horasDocente:{
      type: DataTypes.INTEGER(9),
    validate: {
      is: /^[0-9]+$/i,
    }
  },
    horasPracticas:{
      type: DataTypes.INTEGER(9),
    validate: {
      is: /^[0-9]+$/i,
    }
  },
    horasAutonomas:{
      type: DataTypes.INTEGER(9),
    validate: {
      is: /^[0-9]+$/i,
    }
  },
  }, {});
  Asignaturas.associate = function(models) {
    // associations can be defined here
  };
  return Asignaturas;
};