'use strict';
module.exports = (sequelize, DataTypes) => {
  const PersonaRoles = sequelize.define('PersonaRoles', {
    pdfDesignacion: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  PersonaRoles.associate = function(models) {
    // associations can be defined here
  };
  return PersonaRoles;
};