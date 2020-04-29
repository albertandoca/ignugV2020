'use strict';
let bcrypt = require('bcrypt-nodejs')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Personas', [{
                idTipoIdentificacion: 1,
                identificacion: '9999999999',
                primerNombre: 'ADMIN',
                segundoNombre: 'ADMIN',
                apellidoPaterno: 'SUPER',
                apellidoMaterno: 'USUARIO',
                emailPersonal: 'admin.ignug2020@yavirac.edu.ec',
                emailInstitucional: 'admin.ignug2020@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1713121810',
                primerNombre: 'CARLOS',
                segundoNombre: 'ALBERTO',
                apellidoPaterno: 'ANDOCILLA',
                apellidoMaterno: 'ANDRADE',
                emailPersonal: 'albertandoca@gmail.com',
                emailInstitucional: 'candocilla@yavirac.edu.ec',
                foto: 'FAxoPjBf8cfs1meeAsTVe5zu.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1717171715',
                primerNombre: 'MARCELA',
                segundoNombre: 'ERIKA',
                apellidoPaterno: 'GALLARDO',
                apellidoMaterno: 'GUERRERO',
                emailPersonal: 'gerf@ss.aa',
                emailInstitucional: 'aaaf@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1717171717',
                primerNombre: 'MARCO',
                segundoNombre: 'ROLANDO',
                apellidoPaterno: 'ESTRADA',
                apellidoMaterno: 'ROMERO',
                emailPersonal: 'ger@ss.aa',
                emailInstitucional: 'aaa@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1717171716',
                primerNombre: 'GABRIELA',
                segundoNombre: 'ESTEFANÍA',
                apellidoPaterno: 'RIVERA',
                apellidoMaterno: 'SALAZAR',
                emailPersonal: 'gera@ss.aa',
                emailInstitucional: 'aaas@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1725273823',
                primerNombre: 'KEVIN',
                segundoNombre: 'ALEXANDER',
                apellidoPaterno: 'GUACHAGMIRA',
                apellidoMaterno: 'MANTILLA',
                emailPersonal: 'mantillagka@hotmail.com',
                emailInstitucional: 'kam.guachagmira@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1752653608',
                primerNombre: 'KARINA',
                segundoNombre: 'YELENY',
                apellidoPaterno: 'GOMEZ',
                apellidoMaterno: 'MERIZALDE',
                emailPersonal: 'yelenigomez.05@gmail.com',
                emailInstitucional: 'ykm.gomez@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1742399987',
                primerNombre: 'JAZMIN',
                segundoNombre: 'ANABEL',
                apellidoPaterno: 'SANCHEZ',
                apellidoMaterno: 'JUMBO',
                emailPersonal: 'jazmin909snchz@gmail.com',
                emailInstitucional: 'jaj.sanchez@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1728384567',
                primerNombre: 'MAURICIO',
                segundoNombre: 'LUIS',
                apellidoPaterno: 'MATANGO',
                apellidoMaterno: 'MENDOZA',
                emailPersonal: 'mendoza@gmail.com',
                emailInstitucional: 'lmm.matango@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1728384562',
                primerNombre: 'JUAN',
                segundoNombre: 'FERNANDO',
                apellidoPaterno: 'RUIZ',
                apellidoMaterno: 'ARBOLEDA',
                emailPersonal: 'ruiz@gmail.com',
                emailInstitucional: 'jfa.ruiz@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1928498992',
                primerNombre: 'PEDRO',
                segundoNombre: 'LUIS',
                apellidoPaterno: 'FLORES',
                apellidoMaterno: 'MORENO',
                emailPersonal: 'flores@gmail.com',
                emailInstitucional: 'plm.flores@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1856325987',
                primerNombre: 'DAVID',
                segundoNombre: 'ISAAC',
                apellidoPaterno: 'GUAMAN',
                apellidoMaterno: 'MORENO',
                emailPersonal: 'KAKA@gmail.com',
                emailInstitucional: 'dgm.guaman@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1928498912',
                primerNombre: 'GABRIELA',
                segundoNombre: 'KATHERINE',
                apellidoPaterno: 'MANCHENO',
                apellidoMaterno: 'MOREIRA',
                emailPersonal: 'gaby@gmail.com',
                emailInstitucional: 'gmm.mancheno@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1928498719',
                primerNombre: 'MATEO',
                segundoNombre: 'ALEXANDER',
                apellidoPaterno: 'BENAVIDES',
                apellidoMaterno: 'FLORES',
                emailPersonal: 'hier@gmail.com',
                emailInstitucional: 'mbf.benavides@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1928498718',
                primerNombre: 'JEFFERSON',
                segundoNombre: 'BENJAMIN',
                apellidoPaterno: 'ALMEIDA',
                apellidoMaterno: 'ROBALINO',
                emailPersonal: 'laoa@gmail.com',
                emailInstitucional: 'jar.almeida@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idTipoIdentificacion: 1,
                identificacion: '1928498712',
                primerNombre: 'DIOCLECIANO',
                segundoNombre: 'JUSTINIANO',
                apellidoPaterno: 'CEVALLOS',
                apellidoMaterno: 'ROMANO',
                emailPersonal: 'hisp@gmail.com',
                emailInstitucional: 'dcr.cevallos@yavirac.edu.ec',
                foto: '6cEXUdnfKMw4Q7Xzx4H3CtzH.png',
                psw: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
                semilla: 'hfahlskdhfalskd',
                enLinea: new Date(),
                estado: 'Activo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Personas', null, {});
    }
};