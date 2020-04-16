'use strict';
module.exports = (sequelize, DataTypes) => {
  const Modalidades = sequelize.define('Modalidades', {
    detalle: {
      type: DataTypes.STRING(20), 
      allowNull: false,
      validate: {
        is: /^[a-zA-Z]+$/i,
        notEmpty: true,
        len: [3,20],
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue : true,
        allowNull: false
      }
    }
  }, {});
  Modalidades.associate = function(models) {
    // associations can be defined here
    Modalidades.hasMany(models.Mallas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idModalidad',
        allowNull: false,
        unique: false
      },
      sourcetKey: 'id'
    })
  };
  return Modalidades;
};