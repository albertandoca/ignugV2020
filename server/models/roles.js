'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
    Roles.belongsToMany(models.Personas,
      {
        through: 'PersonaRoles',
        foreignKey: {
          type: DataTypes.INTEGER,
          name: 'idPersona',
          allowNull: false,
        },
        targetKey: 'id'
      }
    );
  };
  return Roles;
};