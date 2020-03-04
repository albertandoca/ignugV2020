'use strict';
module.exports = (sequelize, DataTypes) => {
  const institutosEmail = sequelize.define('institutosEmail', {
    eMail: {
      type: DataTypes.STRING(80), 
      allowNull: false,
      unique: true,
      validate: {
        is: /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/i,
        isEmail: true
      } 
    },
    estado: {
      type: DataTypes.ENUM,
      values: ['Activo', 'Actualiza', 'Inactivo'], 
      allowNull: false,
      default: 'Actualiza'
    }
  }, {});
  institutosEmail.associate = function(models) {
    // associations can be defined here
  };
  return institutosEmail;
};