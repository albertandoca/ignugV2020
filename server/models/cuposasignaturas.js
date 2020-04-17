'use strict';
module.exports = (sequelize, DataTypes) => {
  const cuposAsignaturas = sequelize.define('CuposAsignaturas', {
    creadoPor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
    modificadoPor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Asignado', 'Aplicado', 'Matriculado', 'No utilizado', 'Eliminado']],
      }
    }
  }, {});
  cuposAsignaturas.associate = function(models) {
    // associations can be defined here
    cuposAsignaturas.belongsTo(models.Personas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idEstudiante',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    });
    cuposAsignaturas.belongsTo(models.Asignaturas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idAsignatura',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    });
    cuposAsignaturas.belongsTo(models.PeriodosLectivos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idPeriodoLectivo',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    });

  };
  return cuposAsignaturas;
};