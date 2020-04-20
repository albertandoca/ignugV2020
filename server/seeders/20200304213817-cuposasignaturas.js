'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('CuposAsignaturas', [
        {
          idEstudiante: 10,
          idAsignatura: 1,
          idPeriodoLectivo:3,
          creadoPor: 10,
          modificadoPor: 10,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 10,
          idAsignatura: 2,
          idPeriodoLectivo:3,
          creadoPor: 10,
          modificadoPor: 10,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 10,
          idAsignatura: 3,
          idPeriodoLectivo:3,
          creadoPor: 10,
          modificadoPor: 10,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 10,
          idAsignatura: 4,
          idPeriodoLectivo:3,
          creadoPor: 10,
          modificadoPor: 10,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 10,
          idAsignatura: 5,
          idPeriodoLectivo:3,
          creadoPor: 10,
          modificadoPor: 10,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 10,
          idAsignatura: 6,
          idPeriodoLectivo:3,
          creadoPor: 10,
          modificadoPor: 10,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //otro
        {
          idEstudiante: 11,
          idAsignatura: 1,
          idPeriodoLectivo:3,
          creadoPor: 11,
          modificadoPor: 11,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 11,
          idAsignatura: 2,
          idPeriodoLectivo:3,
          creadoPor: 11,
          modificadoPor: 11,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 11,
          idAsignatura: 3,
          idPeriodoLectivo:3,
          creadoPor: 11,
          modificadoPor: 11,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 11,
          idAsignatura: 4,
          idPeriodoLectivo:3,
          creadoPor: 11,
          modificadoPor: 11,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 11,
          idAsignatura: 5,
          idPeriodoLectivo:3,
          creadoPor: 11,
          modificadoPor: 11,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 11,
          idAsignatura: 6,
          idPeriodoLectivo:3,
          creadoPor: 11,
          modificadoPor: 11,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 10,
          idAsignatura: 33,
          idPeriodoLectivo:3,
          creadoPor: 10,
          modificadoPor: 10,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 10,
          idAsignatura: 34,
          idPeriodoLectivo:3,
          creadoPor: 10,
          modificadoPor: 10,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //yo
        {
          idEstudiante: 7,
          idAsignatura: 1,
          idPeriodoLectivo:3,
          creadoPor: 7,
          modificadoPor: 7,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 7,
          idAsignatura: 2,
          idPeriodoLectivo:3,
          creadoPor: 7,
          modificadoPor: 7,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 7,
          idAsignatura: 3,
          idPeriodoLectivo:3,
          creadoPor: 7,
          modificadoPor: 7,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 7,
          idAsignatura: 4,
          idPeriodoLectivo:3,
          creadoPor: 7,
          modificadoPor: 7,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idEstudiante: 7,
          idAsignatura: 5,
          idPeriodoLectivo:3,
          creadoPor: 7,
          modificadoPor: 7,
          estado:'Asignado',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('CuposAsignaturas', null, {});
  
  }
};
