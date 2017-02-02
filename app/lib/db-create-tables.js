'use strict';

const sequelize = require('./db-connection');

module.exports = function(sequelize) {
  return sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been started');
    sequelize.user.sync({});
  })
  .then(() => sequelize.profile.sync({}))
  .then(() => sequelize.category.sync({}))
  .then(() => sequelize.status.sync({}))
  .then(() => sequelize.resume.sync({}))
  .then(() => sequelize.contact.sync({}))
  .then(() => sequelize.offer.sync({}))
  .then(() => sequelize.application.sync({}))
  .catch(err => {
    console.log('Unable to connect', err);
    throw err;
  });
};
