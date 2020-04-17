'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Institutos', [
      {
        codigoIes: '1234',
        razonSocial: 'Instituto Tecnologico Superior Benito Juarez',
        ruc: '1234567891235',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf', 
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'_BlcIWEp5e5yp8fRurTaz8Gq.png',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoIes: '1235',
        razonSocial: 'Instituto Superior de Turismo y Patrimonio Yavirac',
        ruc: '1234567891237',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'a7rj-62M2en0COQ3zS2XYERe.png',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoIes: '1236',
        razonSocial: 'Instituto Superior Tecnologico Gran Colombia',
        ruc: '1234567891236',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'aDcTPFBlN54X3VlcFe_kDk3O.jpg',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('Institutos', null, {});
  }
};
