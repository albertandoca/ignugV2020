'use strict';
module.exports = (sequelize, DataTypes) => {
    const DocentesAsignaturas = sequelize.define('DocentesAsignaturas', {
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
                /*type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isIn: [
                        ['Asignado', 'Establecido', 'Cancelado', 'Eliminado']
                    ],
                }*/
        }
    }, {});
    DocentesAsignaturas.associate = function(models) {
        DocentesAsignaturas.belongsTo(models.Personas, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idDocente',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        });
        DocentesAsignaturas.belongsTo(models.Asignaturas, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idAsignatura',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        });
        DocentesAsignaturas.belongsTo(models.PeriodosLectivos, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idPeriodoLectivo',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        });
        DocentesAsignaturas.belongsTo(models.Jornadas, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idJornada',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        });
        DocentesAsignaturas.belongsTo(models.Paralelos, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idParalelo',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        })
    };
    return DocentesAsignaturas;
};