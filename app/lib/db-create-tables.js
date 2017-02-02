'use strict';

const dbConnect = require('./db-connection');

module.exports = function() {
  console.log('table create');
  return dbConnect.sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been started');
    return dbConnect.user.sync({});
  })
  .then(() => dbConnect.profile.sync({}))
  .then(() => dbConnect.category.sync({}))
  .then(() => dbConnect.status.sync({}))
  .then(() => dbConnect.resume.sync({}))
  .then(() => dbConnect.contact.sync({}))
  .then(() => dbConnect.offer.sync({}))
  .then(() => dbConnect.application.sync({}))
  .catch(err => {
    console.log('Unable to connect', err);
    throw err;
  });
};
