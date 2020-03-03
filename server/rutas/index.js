;
const EXPRESS = require('express')

let api = EXPRESS.Router(),
    personasControl = require('../controles/personas'),
    autenticarControl = require('../controles/autenticar')
    


api.get('/leer', personasControl.leer)
api.get('/leer-id', personasControl.leerId)



module.exports = api
