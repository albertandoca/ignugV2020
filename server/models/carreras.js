'use strict';
module.exports = (sequelize, DataTypes) => {
  const Carreras = sequelize.define('Carreras', {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        notEmpty: true
      }
    },
    urlAcreditacion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
        notEmpty: true,
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
  };


  return Carreras;
};