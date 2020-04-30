'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatriculasAnuladas = sequelize.define('MatriculasAnuladas', {
    pdfSolicitud:
    {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        is: /^[a-z A-Z 0-9 ÑÁÉÍÓÚÜ áéíóú]+$/i,
      }
    },
    pdfRespuesta:
    {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        is: /^[a-z A-Z 0-9 ÑÁÉÍÓÚÜ áéíóú]+$/i,
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
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  MatriculasAnuladas.associate = function(models) {
    MatriculasAnuladas.belongsTo(models.Matriculas,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idMatricula',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
  };
  return MatriculasAnuladas;
};