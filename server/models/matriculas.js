'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    codigo:{
      type: DataTypes.STRING(50),
      validate: {
        is: /^[A-Za-z0-9 -_áéíóúñüÁÉÍÓÚÑÜ]+$/i,
        len: [3, 50]
      },
      notEmpty: true
 
    },
    tipoMatricula:
    {
      type: DataTypes.ENUM,
      values: ['Ordinaria', 'Extraordinaria','Especial'],
      notEmpty: true
    },
    numeroMatricula:
    {
      type: DataTypes.ENUM,
      values: ['Primera', 'Segunda','Tercera'],
      notEmpty: true

    },
    pdfMatricula: 
    {
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