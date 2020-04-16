'use strict';
let bcrypt = require('bcrypt-nodejs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas', [
      {
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
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Personas', null, {});
  }
};
