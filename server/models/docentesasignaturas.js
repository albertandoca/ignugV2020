'use strict';
module.exports = (sequelize, DataTypes) => {
  const DocentesAsignaturas = sequelize.define('DocentesAsignaturas', {
    estado: DataTypes.BOOLEAN
  }, {});
  DocentesAsignaturas.associate = function(models) {
    // associations can be defined here
  };
  return DocentesAsignaturas;
};