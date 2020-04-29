'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('MaxHorasDocentes', [{
                idDocente: 11,
                horas: 10,
                idPeriodoLectivo: 3,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idDocente: 12,
                horas: 5,
                idPeriodoLectivo: 3,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idDocente: 14,
                horas: 24,
                idPeriodoLectivo: 3,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('MaxHorasDocentes', null, {});
    }
};