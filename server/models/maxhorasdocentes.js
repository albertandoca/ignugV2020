'use strict';
module.exports = (sequelize, DataTypes) => {
    const MaxHorasDocentes = sequelize.define('MaxHorasDocentes', {
        horas: {
            type: DataTypes.INTEGER,
            validate: {
                is: /^[0-9]+$/i,
                len: [1, 2],
            }
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {});
    MaxHorasDocentes.associate = function(models) {
        MaxHorasDocentes.belongsTo(models.Personas, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idDocente',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        });
        MaxHorasDocentes.belongsTo(models.PeriodosLectivos, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idPeriodoLectivo',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        })
    };
    return MaxHorasDocentes;
};