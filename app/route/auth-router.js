'use strict';

const Router = require('express').Router;
const debug = require('debug')('nine2five:auth-router');
const jsonParser = require('body-parser').json();
const createError = require('http-errors');

const User = require('../lib/db-connection').user;
console.log(User, 'User');

const authRouter = module.exports = Router();

authRouter.post('/api/signup', jsonParser, function(req, res, next){
  User.create({
    email : req.body.email,
  })
  .then(() => {
    res.send('Success');
  })
  .catch(next);
});
