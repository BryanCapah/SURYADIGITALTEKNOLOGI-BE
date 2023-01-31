var express = require('express');
var router = express.Router();

var usersRouter = require('./user.js');

const base = router.get('/',
  function (req, res, next) {
    res.json('is running');
  });

module.exports = (app) => {
  app.use('/', base);
  app.use('/api/user', usersRouter);
};
