'use strict';
module.exports = (sequelize, DataTypes) => {
  const DocumentosMatriculas = sequelize.define('DocumentosMatriculas', {
    pdfTituloGrado:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i,  
        notEmpty: true
      }
    },
    pdfAsignacionCupo:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i,  
        notEmpty: true
      }
    }, 
    pdfCedula: 
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9ñÑ_-]*(.pdf)+$/i,  
        notEmpty: true
      }
    },
    observacion:{
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        is: /^[a-z A-Z 0-9 ÑÁÉÍÓÚÜ áéíóú]+$/i,
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  DocumentosMatriculas.associate = function(models) {
    DocumentosMatriculas.belongsTo(models.PersonasRoles,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name:'idEstudiante',
        allowNull:false,
        unique: false,
      },
      targetKey:'id'
    })
    DocumentosMatriculas.belongsTo(models.Carreras,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name:'idCarrera',
        allowNull:false,
        unique: false,
      },
      targetKey:'id'
    })
  };
  return DocumentosMatriculas;
};