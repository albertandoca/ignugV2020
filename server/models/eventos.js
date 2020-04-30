'use strict';
module.exports = (sequelize, DataTypes) => {
  const Eventos = sequelize.define('Eventos', {
    organizador: 
    {
      type: DataTypes.STRING(50), 
      allowNull: false,
      validate: {
        is: /^[a-z A-Z 0-9 ÑÁÉÍÓÚÜ áéíóú]+$/i,
        len: [5, 50],
        notEmpty: true
      }
    },
    titulo: 
    {
      type: DataTypes.STRING(50), 
      allowNull: false,
      validate: {
        is: /^[a-z A-Z 0-9 ÑÁÉÍÓÚÜ áéíóú]+$/i,
        len: [5, 50],
        notEmpty: true
      }
    },
    fecha:
    {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    }, 
    hora:
    {
      type: DataTypes.INTEGER,
      validate: {
        is: /^[0-9]+$/i,
      } 
    }, 
    minuto:
    {
      type: DataTypes.INTEGER,
      validate: {
        is: /^[0-9]+$/i,
      } 
    }, 
    lugar:
    {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-z A-Z 0-9 ÑÁÉÍÓÚÜ áéíóú]+$/i,
        len: [5, 50],
      } 
    }, 
    urlImagenEvento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
        notEmpty: true,
      }
    },
    descripcion:
    {
      type: DataTypes.STRING(400),
      allowNull: false,
      validate: {
        is: /^[a-z A-Z 0-9 ÑÁÉÍÓÚÜ áéíóú]+$/i,
        len: [5, 400],
      }
    },
    estado: 
    {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }  
  }, {});
  Eventos.associate = function(models) {
    // associations can be defined here
  };
  return Eventos;
};