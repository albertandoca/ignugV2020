'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    codigo: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate:{
      is: /^[a-zA-Z0-9 áéíóúñüÁÉÍÓÚÑÜ]+$/i,
      notEmpty:true
      }
    },
    tipoMatricula: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Ordinario', 'Extraordinario', 'Especial']],
      }
    },
    numeroMatricula: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Primera', 'Segunda', 'Tercera']],
        }
      },
    pdfMatricula: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i,  
        notEmpty: true
      }
    },
    creadoPor:
    {
      type: DataTypes.INTEGER,
      notEmpty: true
    },
    modificadoPor:
    {
      type: DataTypes.INTEGER,
      notEmpty: true
    },
    estado: 
    {
      type: DataTypes.BOOLEAN,
      defaultValue : true,
      allowNull: false,
      notEmpty: true
    }
  }, {});
  Matriculas.associate = function(models) {
    Matriculas.belongsTo(models.PersonasRoles,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idEstudiante',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    }),
    Matriculas.belongsTo(models.Asignaturas,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idAsignatura',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
  };
  return Matriculas;
};