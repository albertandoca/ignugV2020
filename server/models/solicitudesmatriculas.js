'use strict';
module.exports = (sequelize, DataTypes) => {
  const SolicitudesMatriculas = sequelize.define('SolicitudesMatriculas', {
    pdfSolicitud:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i,  
        notEmpty: true
      }
    },
    codigoSolicitud: 
    {
      type: DataTypes.STRING(),
      allowNull: false,
      validate:{
        is: /^[A-ZA-Z0-9 -_áéíóúñüÁÉÍÓÚÑÜ/#&.]+$/i,
        notEmpty:true
      }
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Asignado', 'Aplicado', 'Matriculado','Erroneo']],
      }
    }
  }, {});
  SolicitudesMatriculas.associate = function(models) {
    SolicitudesMatriculas.belongsTo(models.PersonasRoles,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idEstudiante',
        allowNull:false,
        unique:false
      },
      targetKey:'id'
    })
    SolicitudesMatriculas.belongsTo(models.PeriodosLectivos,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idPeriodoLectivo',
        allowNull:false,
        unique:false
      },
      targetKey:'id'
    })
    SolicitudesMatriculas.belongsTo(models.Mallas,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idMalla',
        allowNull:false,
        unique:false
      },
      targetKey:'id'
    })
  };
  return SolicitudesMatriculas;
};