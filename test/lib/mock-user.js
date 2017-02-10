'use strict';

const debug = require('debug')('nine2five:mock-user');
const lorem = require('lorem-ipsum');

const User = require('../../src/lib/db-connection').user;

module.exports = function(done) {
  debug('creating mock user');

  let email = lorem({count: 2, units: 'word'}).split(' ').join('-');
  let password = lorem({count: 2, units: 'word'}).split(' ').join('-');

  let exampleUser = {
    email: `${email}@gmail.com`,
    password,
  };

  this.tempPassword = password;
  this.tempEmail = exampleUser.email;

  User.generatePasswordHash(password)
  .then(hash => {
    return User.create({
      email : exampleUser.email,
      password: hash,
    });
  })
  .then(user => user.generateToken())
  .then(token => {
    this.tempToken = token;
    done();
  })
  .catch(done);
};
