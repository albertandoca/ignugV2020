'use strict';
module.exports = (sequelize, DataTypes) => {
  const Institutos = sequelize.define('Institutos', {
    razonSocial:
    {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
        len: [5, 50],
        notEmpty: true
      } 
    }, 
    ruc: 
    {
      type: DataTypes.STRING(13),
      allowNull: false,
      validate: {
        is: /^[0-9]+$/i,
        len: [13, 13],
        notEmpty: true
      } 
    },
    urlAcreditacion:
    {
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

  };
  return Institutos;
};