'use strict';
module.exports = (sequelize, DataTypes) => {
    const PeriodosAcademicos = sequelize.define('PeriodosAcademicos', {
        nivel: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                is: /^[a-zA-Z]+$/i,
                len: [3, 20]
            }
        },
        numero: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
            }
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {});
    PeriodosAcademicos.associate = function(models) {
        PeriodosAcademicos.hasMany(models.Asignaturas, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idPeriodoAcademico',
                allowNull: false,
                unique: false
            },
            sourceKey: 'id'
        });
        PeriodosAcademicos.hasMany(models.SolicitudesMatriculas, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idPeriodoAcademico',
                allowNull: false,
                unique: false
            },
            sourceKey: 'id'
        });
        PeriodosAcademicos.hasMany(models.MaxHorasDocente, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idPeriodoAcademico',
                allowNull: false,
                unique: false
            },
            sourceKey: 'id'
        })
    };
    return PeriodosAcademicos;
};