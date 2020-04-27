'use strict';
module.exports = (sequelize, DataTypes) => {
  const Carreras = sequelize.define('Carreras', {
    detalle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        notEmpty: true
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }    
  }, {});

  Carreras.associate = function(models) {
    Carreras.hasMany(models.Mallas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idCarrera',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Carreras.belongsTo(models.Institutos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idInstituto',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    Carreras.hasMany(models.PersonasRoles, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idCarrera',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Carreras.hasMany(models.DocumentosMatriculas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idCarrera',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
  };


  return Carreras;
};