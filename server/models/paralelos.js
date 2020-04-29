'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paralelos = sequelize.define('Paralelos', {
    detalle: {
      type: DataTypes.STRING(5),
      allowNull: false,
      validate: {
        is: /^[A-Z]+$/i,
        len: [1, 5],
        notEmpty: true,
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {});
  Paralelos.associate = function (models) {
    Paralelos.hasMany(models.DocentesAsignaturas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idParalelo',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Paralelos.hasMany(models.PeriodosAcademicosParalelos, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idParalelo',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    // associations can be defined here
  };
  return Paralelos;
};