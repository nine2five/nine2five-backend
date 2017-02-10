'use strict';

const Router = require('express').Router;
const debug = require('debug')('nine2five:auth-router');
const jsonParser = require('body-parser').json();
const createError = require('http-errors');

const User = require('../lib/db-connection').user;
const basicAuth = require('../lib/basic-auth-middleware');
const bearerAuth = require('../lib/bearer-auth-middleware');

const authRouter = module.exports = Router();

authRouter.post('/api/signup', jsonParser, function(req, res, next){
  debug('/api/signup route');

  let password = req.body.password;
  delete req.body.password;

  if (!password)
    return next(createError(400, 'Password required'));
  if (password.length < 8)
    return next(createError(400, 'Password should be at least 8 characters long'));

  User.generatePasswordHash(password)
  .then(hash => {
    return User.create({
      email : req.body.email,
      password: hash,
    });
  })
  .then(user => user.generateToken())
  .then(token => res.send(token))
  .catch(next);
});

authRouter.get('/api/login', basicAuth, function(req, res, next){
  debug('/api/login route');
});
