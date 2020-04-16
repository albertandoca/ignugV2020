'use strict';
module.exports = (sequelize, DataTypes) => {
  const cuposAsignaturas = sequelize.define('CuposAsignaturas', {
    pdfTituloGrado: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i, 
        notEmpty: true
      }
    },
    pdfAsignacionCupo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i, 
        notEmpty: true
      }
    },
    pdfCedula: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i, 
        notEmpty: true
      }
    },
    pdfSolicitud: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i, 
        notEmpty: true
      }
    },
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
        name: 'idAsignaturas',
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