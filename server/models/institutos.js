'use strict';
module.exports = (sequelize, DataTypes) => {
  const Institutos = sequelize.define('Institutos', {
    razonSocial:
    {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
<<<<<<< HEAD
        len: [5, 50],
        notEmpty: true
=======
        len: [5, 20],
        notEmpty: true,
>>>>>>> dccba40ba45acf61399ae4e87e84b90f9318d1d1
      } 
    }, 
    ruc: 
    {
<<<<<<< HEAD
      type: DataTypes.STRING(13),
      allowNull: false,
      validate: {
        is: /^[0-9]+$/i,
        len: [13, 13],
        notEmpty: true
=======
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
        len: [5, 20],
        notEmpty: true,
>>>>>>> dccba40ba45acf61399ae4e87e84b90f9318d1d1
      } 
    },
    urlAcreditacion:
    {
<<<<<<< HEAD
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
        notEmpty: true
      }
    },
    urlOrganigrama:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
        notEmpty: true
      }
    },
    urlStatuto:
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
      },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue : true,
      allowNull: false
    }
    } 
  }, {});
    Institutos.associate = function(models) {
    //Institutos.belongsTo(models.InstitutosEmails)
    //Institutos.belongsTo(models.InstitutosTelefonos)
    //Institutos.hasOne(models.DireccionesInstitutos)
    //Institutos.hasOne(models.Carreras)

=======
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
        len: [5, 20],
        notEmpty: true,
      }
    },
    categoria:
    {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
        len: [5, 20],
        notEmpty: true,
      }
    },
    urlLogotipo:
    {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
        len: [5, 20],
        notEmpty: true,
      }
    } 
  }, {});
  Institutos.associate = function(models) {
    // associations can be defined here
>>>>>>> dccba40ba45acf61399ae4e87e84b90f9318d1d1
  };
  return Institutos;
};