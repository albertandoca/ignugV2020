'use strict';
module.exports = (sequelize, DataTypes) => {
  const Institutos = sequelize.define('Institutos', {
      codigoIes:
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
          is: /^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]+$/i,
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
      pdfRuc:
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i, 
          notEmpty: true
        }
      },
      resolucion: 
      {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          is: /^[A-ZA-Z0-9 -_áéíóúñüÁÉÍÓÚÑÜ/#&.]+$/i,
          len: [13, 13]
        } 
      },
      pdfResolucion:
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i,  
          notEmpty: true
        }
      },
      categoria:
      {
        type: DataTypes.ENUM,
        values: ['Público', 'Privado'],
        default: 'Público'
      },
      logotipo:
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z0-9_-]*(.jpg|.svg|.png)+$/i,
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