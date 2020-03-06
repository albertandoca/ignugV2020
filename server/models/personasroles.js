'use strict';
module.exports = (sequelize, DataTypes) => {
  const PersonasRoles = sequelize.define('PersonasRoles', {
    urlDesignacion: DataTypes.STRING,
    observaciones: DataTypes.TEXT,
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  PersonasRoles.associate = function(models) {
    // associations can be defined here
  };
  return PersonasRoles;
};