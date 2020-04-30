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
        // notEmpty: true,
      }
    },
    primerNombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        // isUppercase: true,
        notEmpty: true
      }
    },
    segundoNombre: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        // isUppercase: true,
      }
    },
    apellidoPaterno: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        //isUppercase: true,
        notEmpty: true
      }
    },
    apellidoMaterno: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[A-Z ÑÁÉÍÓÚÜ]+$/i,
        //isUppercase: true,
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
    foto: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9_-]*(.jpg|.svg|.png)+$/i,
        notEmpty: true
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

  Personas.beforeUpdate((persona, option) => {

  })

  Personas.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.psw, function (err, isMatch) {
      if (err) {
        return cb(err)
      }
      cb(null, isMatch);
    })
  }
  Personas.associate = function (models) {
    Personas.hasMany(models.PersonasRoles, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idPersona',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Personas.belongsTo(models.TiposIdentificaciones, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idTipoIdentificacion',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
    Personas.hasMany(models.CuposAsignaturas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idEstudiante',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Personas.hasMany(models.MaxHorasDocentes, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idDocente',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Personas.hasMany(models.DocumentosMatriculas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idEstudiante',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Personas.hasMany(models.SolicitudesMatriculas, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: 'idEstudiante',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
  };

  return Personas;
};