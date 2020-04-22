'use strict';
module.exports = (sequelize, DataTypes) => {
    const MaxHorasDocente = sequelize.define('MaxHorasDocente', {
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
    MaxHorasDocente.associate = function(models) {
        MaxHorasDocente.belongsTo(models.Personas, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idDocente',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        });
        MaxHorasDocente.belongsTo(models.PeriodosAcademicos, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idPeriodoAcademico',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        })
    };
    return MaxHorasDocente;
};