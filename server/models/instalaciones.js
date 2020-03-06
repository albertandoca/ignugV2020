'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instalaciones = sequelize.define('Instalaciones', {
    direccion:{
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlphanumeric: true,
      }
    },
    codigoPostal: {
      type: DataTypes.STRING(6),
      allowNull: true,
      validate: {
        is: /^[0-9]+$/i,
        len: [6-6]
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  Instalaciones.associate = function(models) {
    // associations can be defined here
<<<<<<< HEAD:server/models/direccionesinstituto.js
    DireccionesInstitutos.belongsTo(models.Institutos)
    DireccionesInstitutos.belongsTo(models.Lugares)
    DireccionesInstitutos.belongsTo(models.TiposCampus)
=======
    Instalaciones.belongsTo(models.Institutos)
    Instalaciones.belongsTo(models.Lugares)
    Instalaciones.belongsTo(models.TiposInstalaciones)
>>>>>>> master:server/models/instalaciones.js
  };

  return Instalaciones;
};