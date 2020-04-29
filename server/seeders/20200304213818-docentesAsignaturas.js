'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('DocentesAsignaturas', [{
                idDocente: 11,
                idAsignatura: 1,
                idPeriodoLectivo: 3,
                idJornada: 1,
                idParalelo: 3,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idDocente: 12,
                idAsignatura: 3,
                idPeriodoLectivo: 3,
                idJornada: 2,
                idParalelo: 2,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idDocente: 13,
                idAsignatura: 3,
                idPeriodoLectivo: 3,
                idJornada: 3,
                idParalelo: 2,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idDocente: 14,
                idAsignatura: 8,
                idPeriodoLectivo: 3,
                idJornada: 4,
                idParalelo: 1,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idDocente: 15,
                idAsignatura: 10,
                idPeriodoLectivo: 3,
                idJornada: 4,
                idParalelo: 1,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idDocente: 14,
                idAsignatura: 33,
                idPeriodoLectivo: 3,
                idJornada: 4,
                idParalelo: 1,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idDocente: 15,
                idAsignatura: 32,
                idPeriodoLectivo: 3,
                idJornada: 4,
                idParalelo: 1,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});

    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('DocentesAsignaturas', null, {});
    }
};