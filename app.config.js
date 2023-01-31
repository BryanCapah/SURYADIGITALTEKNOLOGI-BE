const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const env = require('dotenv');
const helmet = require('helmet')
const cors = require('cors')
const compress = require('compression')


exports.appConfig = (app) => {
    env.config()
    var app = express();
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(helmet({
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false,
        crossOriginResourcePolicy: false,
    }))
    app.use(cors())
    app.use(express.json({ limit: '50mb' }));
    app.use(compress())
    app.use(express.urlencoded({ extended: true, limit: '50mb' }));
    app.use(cookieParser());
    app.disable('x-powered-by')

    return app
}