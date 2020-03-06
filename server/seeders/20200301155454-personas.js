'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas', [
      {
        TiposIdentificacioneId: 1,
        identificacion: '1717171717',
        primerNombre: 'GABRIELA',
        segundoNombre: 'ESTEFANÍA',
        apellidoPaterno: 'RIVERA',
        apellidoMaterno: 'SALAZAR',
        emailPersonal: 'ger@ss.aa',
        emailInstitucional: 'aaa@aaa.aa',
        psw: '12345',
        semilla: 'hfahlskdhfalskd',
        enLinea: new Date(),
        estado: 'Activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TiposIdentificacioneId: 1,
        identificacion: '1717171716',
        primerNombre: 'GABRIELA1',
        segundoNombre: 'ESTEFANÍA',
        apellidoPaterno: 'RIVERA',
        apellidoMaterno: 'SALAZAR',
        emailPersonal: 'ger@ss.aa1',
        emailInstitucional: 'aaa@aaa.aa1',
        psw: '12346',
        semilla: 'hfahlskdhfalskd',
        enLinea: new Date(),
        estado: 'Activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TiposIdentificacioneId: 1,
        identificacion: '1717171715',
        primerNombre: 'gabriela',
        segundoNombre: 'ESTEFANÍA',
        apellidoPaterno: 'RIVERA',
        apellidoMaterno: 'SALAZAR',
        emailPersonal: 'ger@ss.aa2',
        emailInstitucional: 'aaa@aaa.aa2',
        psw: '12347',
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
