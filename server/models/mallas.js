'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mallas = sequelize.define('Mallas', {
    detalle: {
      type: DataTypes.STRING(60), 
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9 áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        len: [3, 20],
        notEmpty: true,
      }
    },
    fecha: {
      type: DataTypes.DATE, 
      allowNull: false,
      validate: {
        // is: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/i,
        isDate: true,
        notEmpty: true
      } 
    },
    titulo: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9 áéíóúñÑüÁÉÍÓÚÜ]+$/i,
        notEmpty: true,
      }
    },
    numeroPeriodosAcademicos: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      validate: {
        isNumeric: true
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
    estado: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: true
    }
  }, {});
  Mallas.associate = function(models) {
    // associations can be defined here
    Mallas.belongsTo(models.Carreras, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idCarrera',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    Mallas.belongsTo(models.Modalidades, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idModalidad',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    Mallas.hasMany(models.Asignaturas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idMalla',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Mallas.hasMany(models.SolicitudesMatriculas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idMalla',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Mallas.hasMany(models.PeriodosAcademicosParalelos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idMalla',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
  };
  return Mallas;
};