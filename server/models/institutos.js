'use strict';
module.exports = (sequelize, DataTypes) => {
  const Institutos = sequelize.define('Institutos', {
    razonSocial:
    {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
        len: [5, 20],
        notEmpty: true,
      } 
    }, 
    ruc: 
    {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
        len: [5, 20],
        notEmpty: true,
      } 
    },
    urlAcreditacion:
    {
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
  };
  return Institutos;
};