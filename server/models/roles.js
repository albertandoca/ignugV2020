'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    detalle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {
  });
  
  Roles.associate = function(models)  {
    // associations can be defined here
    Roles.hasMany(models.PersonasRoles,
      {
        foreignKey: {
          type: DataTypes.INTEGER,
          name: 'idRol',
          allowNull: false,
          unique: false
        },
        sourceKey: 'id'
      }
    );
  };
  return Roles;
};