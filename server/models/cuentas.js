'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cuentas = sequelize.define('Cuentas', {
        identificacion: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
            validate: {
                is: /^[a-zA-Z0-9]+$/i,
                len: [5, 20],
                // notEmpty: true,
            }
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-zA-Z0-9_-]*(.jpg|.svg|.png)+$/i,
                notEmpty: true
            }
        },
        primerNombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
                // isUppercase: true,
                notEmpty: true
            }
        },
        segundoNombre: {
            type: DataTypes.STRING(50),
            allowNull: true,
            validate: {
                is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
                // isUppercase: true,
            }
        },
        apellidoPaterno: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
                //isUppercase: true,
                notEmpty: true
            }
        },
        apellidoMaterno: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
                //isUppercase: true,
                notEmpty: true
            }
        },
        emailPersonal: {
            type: DataTypes.STRING(80),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        emailInstitucional: {
            type: DataTypes.STRING(80),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        fechaDeNacimiento: {
            type: DataTypes.DATE,
            validate: {
                isDate: true
            }
        },
        direccion: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                is: /^[a-z A-Z 0-9 ÑÁÉÍÓÚÜ áéíóú]+$/i,
                len: [5, 50],
            }
        },
        telefonos: {
            type: DataTypes.STRING(10),
            allowNull: true,
            validate: {
                is: /^[0-9]+$/i,
            }
        },
        operadora: {
            type: DataTypes.STRING(20),
            allowNull: true,
            validate: {
                is: /^[a-zA-Z ]+$/i,
            }
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true
        }
    }, {});
    Cuentas.associate = function(models) {
        Cuentas.belongsTo(models.TiposIdentificaciones, {
            foreignKey: {
                type: DataTypes.INTEGER,
                name: 'idTipoIdentificacion',
                allowNull: false,
                unique: false
            },
            targetKey: 'id'
        });
    };
    return Cuentas;
};