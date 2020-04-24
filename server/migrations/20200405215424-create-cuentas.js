'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Cuentas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            identificacion: {
                type: Sequelize.STRING
            },
            foto: {
                type: Sequelize.STRING
            },
            primerNombre: {
                type: Sequelize.STRING
            },
            segundoNombre: {
                type: Sequelize.STRING
            },
            apellidoPaterno: {
                type: Sequelize.STRING
            },
            apellidoPaterno: {
                type: Sequelize.STRING
            },
            emailPersonal: {
                type: Sequelize.STRING
            },
            emailInstitucional: {
                type: Sequelize.STRING
            },
            fechaDeNacimiento: {
                type: Sequelize.DATE
            },
            direccion: {
                type: Sequelize.STRING
            },
            telefonos: {
                type: Sequelize.STRING
            },
            operadora: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Cuentas');
    }
};