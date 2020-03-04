;
let env = require('dotenv').config()

const EXPRESS =  require('express'),
      BODYPARSER = require('body-parser'),
      // COOKIEPARSER = require('cookie-parser')
      HELMET = require('helmet')
      TIEMPO = 1 * 60 * 1000

let app = EXPRESS(),
    passport = require('passport'),
    session = require('express-session'),
    parseurl = require('parseurl'),
    rutas = require('../rutas/index'),
    modelos = require('../models'),
    imgPersona = require('connect-multiparty'),
   
    sess = {
        secret: process.env.KEY_SESSION,
        resave: false,
        saveUninitialized: false,
        name : 'sessionId',
        cookie: {
            expires: new Date(Date.now() + TIEMPO),
            maxAge: TIEMPO
        }
    }

    if (process.env.NODE_ENV === 'production') {
        app.set('trust proxy', 1)
        sess.cookie.secure = true
    }
    
//app.use(COOKIEPARSER())
app.use(BODYPARSER.urlencoded({
    extended: true
}))
app.use(BODYPARSER.json())
app.use(imgPersona({
    uploadDir: './files/img/persona'
}))
app.use(imgIcon({
    uploadDir: './files/img/icon'
}))
app.use(session(sess))
app.use(passport.initialize())
app.use(passport.session());
app.use(HELMET())
app.use((req, res, next) => {
    if (!req.session.views) {
        req.session.views = {}
    }
    let pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    next()
})

modelos.sequelize.sync().then(() => {
    console.log('DB en línea...')
}).catch(err => {
    console.log(err) 
})

app.get('/foo', (req, res, next) => {
    res.send('las visitas de esta página son ' + req.session.views['/foo'])
    console.log(req.session)
})

app.get('/bar', (req, res, next) => {
    res.send('las visitas de esta página son ' + req.session.views['/bar'])
    console.log(req.session)
})

app.use('/server', rutas)

module.exports = app