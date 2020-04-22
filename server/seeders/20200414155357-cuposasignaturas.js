'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CuposAsignaturas', [{
     
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('CuposAsignaturas', null, {});

  }
};
