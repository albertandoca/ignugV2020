'use strict';
module.exports = (sequelize, DataTypes) => {
    const PerfilesDocentes = sequelize.define('PerfilesDocentes', {
        areaAcademica: {
            type: DataTypes.STRING(50),
            allowNull: true,
            unique: true,
            validate: {
                is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
                len: [3, 50],
                notEmpty: true,
            }
        },
        detalle: {
            type: DataTypes.STRING(50),
            allowNull: true,
            unique: true,
            validate: {
                is: /^[a-zA-Z áéíóúñÑüÁÉÍÓÚÜ]+$/i,
                len: [3, 50],
                notEmpty: true,
            }
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {});
    PerfilesDocentes.associate = function(models) {
        PerfilesDocentes.belongsTo(models.Personas, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idDocente',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        })
    };
    return PerfilesDocentes;
};