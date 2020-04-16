let jwt = require('jsonwebtoken')

let autenticado = (req, res, next) => {
    let token = req.headers.authorization
    let semilla = req.sessionID
    if (token) {
        jwt.verify(token, process.env.KEY_JWT, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    transaccion: false,
                    data: err,
                    msg: 'falló autenticación'
                })
            } else {
                req.decoded = decoded
                console.log(decoded)
                next()
            }
        })
    } else {
        return res.status(403).json({
            transaccion: false,
            data: null,
            msg: 'No se envió el token'
        })
    }
}

module.exports = {
    autenticado
}