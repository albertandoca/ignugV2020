'use strict';
module.exports = (sequelize, DataTypes) => {
  const PersonaRoles = sequelize.define('PersonaRoles', {
    urlDesignacion: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  PersonaRoles.associate = function(models) {
    // associations can be defined here
  };
  return PersonaRoles;
};