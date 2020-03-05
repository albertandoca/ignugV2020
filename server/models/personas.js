'use strict';
let bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const Personas = sequelize.define('Personas', {
    identificacion: {
      type: DataTypes.STRING(20), 
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
        len: [5, 20],
        notEmpty: true,
      }
    },
    primerNombre: {
      type: DataTypes.STRING(50), 
      allowNull: false,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        isUppercase: true,
        notEmpty: true
      }
    },
    segundoNombre: {
      type: DataTypes.STRING(50), 
      allowNull: true,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        isUppercase: true,
      }
    },
    apellidoPaterno: {
      type: DataTypes.STRING(50), 
      allowNull: false,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        isUppercase: true,
        notEmpty: true
      }
    },
    apellidoMaterno: {
      type: DataTypes.STRING(50), 
      allowNull: false,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        isUppercase: true,
        notEmpty: true
      }
    },
    emailPersonal: {
      type: DataTypes.STRING(80), 
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    emailInstitucional: {
      type: DataTypes.STRING(80), 
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    psw: {
      type: DataTypes.STRING,
      allowNull: false
    },
    semilla: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    enLinea: {
      type: DataTypes.DATE, 
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    estado: {
      type: DataTypes.ENUM,
      values: ['Activo', 'Actualiza', 'Inactivo'], 
      allowNull: false,
      default: 'Actualiza'
    }
  }, {});

  Personas.beforeSave((persona, options) => {
    if (persona.changed('psw')) {
      persona.psw = bcrypt.hashSync(persona.psw, bcrypt.genSaltSync(10), null);
    }
  });

  Personas.prototype.comparePsw = (psw, cb) => {
    bcrypt.compare(psw, this.psw, (err, isMatch) => {
      if (err) {
        return cb(err);
      }
      // Cambiar último ingreso, crear registro de entrada
      cb(null, isMatch);
    })
  }
  Personas.associate = function(models) {
    // associations can be defined here
    // Personas.hasOne(models.Estados);
    Personas.belongsToMany(models.Roles, {
      through: 'PersonaRoles',
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idRol',
        allowNull: false,
      },
      targetKey: 'id'
    });
    Personas.belongsTo(models.TipoIdentificaciones);
  };
  return Personas;
};