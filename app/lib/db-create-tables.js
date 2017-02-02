'use strict';

const dbConnect = require('./db-connection');

module.exports = function(sequelize) {
  // console.log(sequelize);
  return Promise.resolve(sequelize)
  // .authenticate()
  .then(() => {
    console.log('Database connection has been started');
    console.log(dbConnect.user)
    return user.sync({});
  })
  .then(() => profile.sync({}))
  .then(() => category.sync({}))
  .then(() => status.sync({}))
  .then(() => resume.sync({}))
  .then(() => contact.sync({}))
  .then(() => offer.sync({}))
  .then(() => application.sync({}))
  .catch(err => {
    console.log('Unable to connect', err);
    throw err;
  });
};
