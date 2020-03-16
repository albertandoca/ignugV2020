'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asignaturas = sequelize.define('Asignaturas', {
    descripcion: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        notEmpty: true,
      }
    },
    creditos: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      validate: {
        len: [2,5], 
      }
    },
    horasDocente:{
      type: DataTypes.INTEGER(5),
      allowNull: false,
      validate: {
        len: [1,2]
      }
    
    },
    horasPracticas: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      validate: {
        len: [1,2]
    }
  },
    horasAutonomas:{
      type: DataTypes.INTEGER(5),
      allowNull: false,
      validate: {
        len: [1,2]
    }
  },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  Asignaturas.associate = function(models) {
    // associations can be defined here
    
    Asignaturas.belongsTo(models.Mallas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idMalla',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    Asignaturas.belongsTo(models.PeriodosAcademicos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idPeriodoAcademico',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    Asignaturas.belongsTo(models.UnidadesCurriculares, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idUnidadCurricular',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
  };
  return Asignaturas;
};