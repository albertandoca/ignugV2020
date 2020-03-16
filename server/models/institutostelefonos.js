'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstitutosTelefonos = sequelize.define('InstitutosTelefonos', {
    codigoPais: {
      type: DataTypes.STRING(3),
      allowNull: true,
      validate: {
        is: /^[0-9]+$/i, 
      }
    },
    numero: {
      type: DataTypes.STRING(20),
      allowNull: true,
      validate: {
        is: /^[0-9]+$/i,
      }
    },
    operadora: {
      type: DataTypes.STRING(20),
      allowNull: true,
      validate: {
        is: /^[a-zA-Z ]+$/i,
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
     
  }, {});
  InstitutosTelefonos.associate = function(models) {
    InstitutosTelefonos.belongsTo(models.Institutos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idInstituto',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
  };
  return InstitutosTelefonos;
};