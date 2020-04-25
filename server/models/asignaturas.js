'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asignaturas = sequelize.define('Asignaturas', {
    codigoAsignatura: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate:{
        is: /^[A-ZA-Z0-9 -_áéíóúñüÁÉÍÓÚÑÜ/#&.]+$/i,
        notEmpty:true
      }
    },
    detalle: {
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
    });
    Asignaturas.belongsTo(models.PeriodosAcademicos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idPeriodoAcademico',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    });
    Asignaturas.belongsTo(models.UnidadesCurriculares, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idUnidadCurricular',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    }); 
    Asignaturas.hasMany(models.CuposAsignaturas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idAsignatura',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    });
    Asignaturas.belongsTo(models.CamposFormaciones, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idCampoFormacion',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    });
    Asignaturas.hasMany(models.Matriculas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idAsignatura',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    });
    Asignaturas.hasMany(models.Matriculas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idAsignatura',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    });
  };
  
  return Asignaturas;
};