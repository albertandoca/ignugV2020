let jwt = require('jsonwebtoken')


let autenticado = (req, res, next) => {
    let token = req.headers.authorization
    let semilla = req.sessionID
    console.log(token)
    if (token) {
        jwt.verify(token, semilla, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    transaccion: false,
                    data: null,
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