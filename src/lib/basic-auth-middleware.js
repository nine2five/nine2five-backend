'use strict';

const createError = require('http-errors');
const debug = require('debug')('nine2five:basic-auth-middleware');

module.exports = (req, res, next) => {
  debug();

  let authHeader = req.headers.authorization;
  if (!authHeader)
    return next(createError(401, 'Requires authorization header'));

  let base64String = authHeader.split('Basic ')[1];
  if (!base64String)
    return next(createError(401, 'Require username and password'));

  let utf8String = new Buffer(base64String, 'base64').toString();
  let authArray = utf8String.split(':');
  req.auth = {
    username: authArray[0],
    password: authArray[1],
  };

  if (!req.auth.username)
    return next(createError(401, 'Basic auth requires username'));

  if (!req.auth.password)
    return next(createError(401, 'Basic auth requires password'));
  next();
};
