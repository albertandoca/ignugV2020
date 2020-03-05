'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('periodosacademicos', [
      {
        
        Nivel: 'Primero',
        Numero: '5',
        
      
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('periodosacademicos', null, {});
  }
};
