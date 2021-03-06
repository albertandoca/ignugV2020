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
        logotipo:'RY_HXiBUa8hXq_BjtgGydZfK.png',
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
        logotipo:'MSEBstahh8lMFMzCJ2sGqsIA.png',
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
        logotipo:'lpg-QMSz4jFTU_7U46WWJPC6.png',
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
