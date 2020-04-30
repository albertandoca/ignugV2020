'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('PerfilesDocentes', [{
                idDocente: 12,
                areaAcademica: 'Ingeniería y Tecnología',
                detalle: 'Curso Oracle Avanzado',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idDocente: 13,
                areaAcademica: 'Ciencias sociales Educación comercial y  derecho',
                detalle: 'React ',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idDocente: 14,
                areaAcademica: 'Humanidades y Artes  ',
                detalle: 'Base de Datos ',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('PerfilesDocentes', null, {});
    }
};