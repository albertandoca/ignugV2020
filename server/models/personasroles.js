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
  }, {
    freezeTableName: true
  });
  PersonasRoles.associate = function(models) {
    PersonasRoles.belongsTo(models.Personas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idPersona',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    PersonasRoles.belongsTo(models.Roles, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idRol',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    PersonasRoles.belongsTo(models.Carreras, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idCarrera',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
  };
  return PersonasRoles;
};