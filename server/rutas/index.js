;
const EXPRESS = require('express')

let api = EXPRESS.Router(),
    personasControl = require('../controles/personas'),
    autenticarControl = require('../controles/autenticar'),
    imgPersona =  imgIcon = require('connect-multiparty'),
    imgPersonaMiddlewear = imgPersona()
    // imgIcon = require('connect-multiparty'),
    imgIconMiddlewear = imgIcon()


api.get('/leer', personasControl.leer)
api.get('/leer-id', personasControl.leerId)
api.post('/crear', imgPersonaMiddlewear, personasControl.crear)
api.post('/crear1', imgIconMiddlewear, personasControl.crear)

module.exports = api
