'use strict';
module.exports = (sequelize, DataTypes) => {
  const Institutos = sequelize.define('Institutos', {
      codigoIES:
      {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true,
        validate: {
          is: /^[0-9]+$/i,
          len: [3, 8]
        } 
      },
      razonSocial:
      {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          is: /^[a-zA-Z0-9]+$/i,
          len: [5, 50]
        } 
      }, 
      ruc: 
      {
        type: DataTypes.STRING(13),
        allowNull: false,
        validate: {
          is: /^[0-9]+$/i,
          len: [13, 13]
        } 
      },
      urlResolucion:
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
          notEmpty: true
        }
      },
      categoria:
      {
        type: DataTypes.ENUM,
        values: ['Público', 'Privado'],
        default: 'Público'
      },
      urlLogotipo:
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
          notEmpty: true
        }
      },
      estado: 
      {
        type: DataTypes.BOOLEAN,
        defaultValue : true,
        allowNull: false
      }
  }, {});
  Institutos.associate = function(models) {
    Institutos.hasMany(models.PersonasRoles, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idInstituto',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Institutos.hasMany(models.InstitutosEmails, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idInstituto',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Institutos.hasMany(models.InstitutosTelefonos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idInstituto',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Institutos.hasMany(models.Instalaciones, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idInstituto',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
  };
  return Institutos;
};