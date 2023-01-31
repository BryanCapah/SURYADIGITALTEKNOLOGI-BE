const cron = require('node-cron');
const { appConfig } = require('./app.config');
const { sendBirthdayMessage } = require('./controllers/birthday');
const routes = require('./routes');
const app = appConfig()
cron.schedule('00 09 * * *', sendBirthdayMessage)
routes(app)

module.exports = app;
