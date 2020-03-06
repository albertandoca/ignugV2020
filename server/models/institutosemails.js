'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstitutosEmails = sequelize.define('InstitutosEmails', {
    eMail: {
      type: DataTypes.STRING(80), 
      allowNull: false,
      unique: true,
      validate: {
        // is: /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/i,
        isEmail: true
      } 
    },
    estado: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: true
    }
  }, {});
  InstitutosEmails.associate = function(models) {
    // associations can be defined here
    InstitutosEmails.belongsTo(models.Institutos)
    };
  return InstitutosEmails;
};