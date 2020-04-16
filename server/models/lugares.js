'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lugares = sequelize.define('Lugares', {
    codigo: {
      type: DataTypes.STRING(9),
      allowNull: false,
      unique: true,
      validate: {
        is: /^[0-9]+$/i,
        len: [1-9]
      }
    },
    detalle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        notEmpty: true,
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }/*,
    idPadre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isNumber: true,
        notEmpty: true,
      }
    }*/
  }, {});
  Lugares.associate = function(models) {
    Lugares.hasMany(models.Instalaciones, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idLugar',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Lugares.belongsTo(models.Lugares, {
      foreignKey: {
        type: DataTypes.STRING,
        name: 'codigoLugar',
        allowNull: false,
        unique: false
      },
      targetKey: 'codigo'
    })
  };
  return Lugares;
};