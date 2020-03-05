'use strict';
module.exports = (sequelize, DataTypes) => {
  const Modalidades = sequelize.define('Modalidades', {
    descripcion: {
      type: DataTypes.STRING(20), 
      allowNull: false,
      validate: {
        is: /^[a-zA-Z]+$/i,
        notEmpty: true,
        len: [3-20],
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue : true,
        allowNull: false
      }
    }
  }, {});
  Modalidades.associate = function(models) {
    // associations can be defined here
  };
  return Modalidades;
};