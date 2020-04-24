'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cuentas', [{
                idTipoIdentificacion: 1,
                identificacion: '1752899986',
                foto: 'SEjwPSlu_RB9EGujkA9Fltf7.png',
                primerNombre: 'MARCO',
                segundoNombre: 'ROLANDO',
                apellidoPaterno: 'ESTRADA',
                apellidoMaterno: 'ROMERO',
                emailPersonal: 'ger@ss.aa',
                emailInstitucional: 'aaa@yavirac.edu.ec',
                fechaDeNacimiento: '23/08/1998',
                direccion: 'Av. maldonado y 2 de agosto',
                telefonos: '0998765786',
                operadora: 'Claro',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 2,
                identificacion: '1712787543',
                foto: 'SEjwPSlu_RB9EGujkA9Fltf7.png',
                primerNombre: 'GABRIELA',
                segundoNombre: 'ESTEFANÍA',
                apellidoPaterno: 'RIVERA',
                apellidoMaterno: 'SALAZAR',
                emailPersonal: 'gera@ss.aa',
                emailInstitucional: 'aaas@yavirac.edu.ec',
                fechaDeNacimiento: '23/08/1998',
                direccion: 'Av.10 de agosto y colon',
                telefonos: '0998765654',
                operadora: 'Claro',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 3,
                identificacion: '1717171715',
                foto: 'SEjwPSlu_RB9EGujkA9Fltf7.png',
                primerNombre: 'MARCELA',
                segundoNombre: 'ERIKA',
                apellidoPaterno: 'GALLARDO',
                apellidoMaterno: 'GUERRERO',
                emailPersonal: 'gerf@ss.aa',
                emailInstitucional: 'aaaf@yavirac.edu.ec',
                fechaDeNacimiento: '23/08/1998',
                direccion: 'Av. maldonado y 2 de agosto',
                telefonos: '0998763245',
                operadora: 'Movistar',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Cuentas', null, {});
    }
};