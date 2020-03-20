;
let env = require('dotenv').config()

const EXPRESS =  require('express'),
      BODYPARSER = require('body-parser'),
      HELMET = require('helmet'),
      TIEMPO = 1 * 60 * 1000

let app = EXPRESS(),
    passport = require('passport'),
    session = require('express-session'),
    parseurl = require('parseurl'),
    rutas = require('../rutas/index'),
    modelos = require('../models'),
    cors = require('cors'),
    morgan = require('morgan'),
    sess = {
        secret: process.env.KEY_SESSION,
        resave: false,
        saveUninitialized: false,
        name : 'sessionId',
        cookie: {
            httpOnly: true,
            expires: new Date(Date.now() + TIEMPO),
            maxAge: TIEMPO
        }
    },
    corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }

    if (process.env.NODE_ENV === 'production') {
        app.set('trust proxy', 1)
        sess.cookie.secure = true
    }
    
app.use(HELMET())

app.use(BODYPARSER.urlencoded({
    extended: true
}))
app.use(BODYPARSER.json())
app.use(cors(corsOptions))
app.use(morgan('combined'))

app.use(session(sess))
app.use(passport.initialize())
app.use(passport.session());

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