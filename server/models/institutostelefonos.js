'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstitutosTelefonos = sequelize.define('InstitutosTelefonos', {
    idDireccionesInstituto: DataTypes.STRING,
    IdTelefonos: DataTypes.STRING 
  }, {});
  InstitutosTelefonos.associate = function(models) {
    // associations can be defined here
  };
  return InstitutosTelefonos;
};