'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Institutos', [
      {
        codigoIes: '1234',
        razonSocial: 'Yavirac',
        ruc: '1234567891235',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf', 
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'SEjwPSlu_RB9EGujkA9Fltf7.png',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoIes: '1235',
        razonSocial: 'Gran Colombia',
        ruc: '1234567891237',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'478ropdQR3ED_UuskwWfp7Fh.png',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoIes: '1236',
        razonSocial: 'Yavira6',
        ruc: '1234567891236',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'SEjwPSlu_RB9EGujkA9Fltf7.png',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoIes: '1237',
        razonSocial: 'Gran Colombia7',
        ruc: '1234567891277',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'478ropdQR3ED_UuskwWfp7Fh.png',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoIes: '1238',
        razonSocial: 'Yavira8',
        ruc: '1234567891238',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'SEjwPSlu_RB9EGujkA9Fltf7.png',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoIes: '1239',
        razonSocial: 'Gran Colombia9',
        ruc: '1234567891239',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'478ropdQR3ED_UuskwWfp7Fh.png',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoIes: '1244',
        razonSocial: 'Yavirac44',
        ruc: '1234567891244',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'SEjwPSlu_RB9EGujkA9Fltf7.png',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoIes: '1245',
        razonSocial: 'Gran Colombia45',
        ruc: '1234567891245',
        pdfRuc: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        resolucion: '123456789',
        pdfResolucion: '4eo3zg2CEF6MSN9G8WPFSzF4.pdf',
        categoria: 'Público',
        logotipo:'478ropdQR3ED_UuskwWfp7Fh.png',
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
