'use strict';
module.exports = (sequelize, DataTypes) => {
    const Jornadas = sequelize.define('Jornadas', {
        detalle: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                is: /^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]+$/i,
                len: [5, 50]
            }
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {});
    Jornadas.associate = function(models) {
        Jornadas.hasMany(models.DocentesAsignaturas, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idJornada',
                allowNull: false,
                unique: false
            },
            sourceKey: 'id'
        })
    };
    return Jornadas;
};