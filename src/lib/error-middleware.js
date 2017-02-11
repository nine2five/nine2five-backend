'use strict';

const createError = require('http-errors');
const debug = require('debug')('nine2five:error-middleware');

module.exports = (err, req, res, next) => {
  debug('error middleware');
  console.error(err);
  console.error('name', err.name);

  if (err.status){
    res.status(err.status).send(err.name);
    return next();
  }

  if (err.name == 'SequelizeUniqueConstraintError'){
    err = createError(409, err.message);
    res.status(err.status).send(err.name);
    return next();
  }

  err = createError(500, err.message);
  res.status(err.status).send(err.name);
  next();
};
