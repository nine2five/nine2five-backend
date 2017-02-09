'use strict';

const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue : false,
    },
    findHash: {
      type: DataTypes.STRING,
      unique: true,
    },
  },{
    setterMethods: {
      generatePasswordHash: function(password) {
        return new Promise((resolve, reject) => {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) reject(createError(400, 'Invalid user information'));
            resolve(hash);
          });
        });
      },
    },
    instanceMethods: {
      comparePasswordHash: function(password) {
        return new Promise((resolve, reject) => {
          bcrypt.compare(password, this.password, (err, valid) => {
            if (err) reject(err);
            if (!valid) return reject(createError(401, 'Incorrect password'));
            resolve(this);
          });
        });
      },
      generateToken: function() {
        return new Promise((resolve, reject) => {
          this.generateFindHash()
           .then(findHash => resolve(jwt.sign({token: findHash}, process.env.APP_SECRET)))
           .catch(err => reject(err));
        });
      },
      generateFindHash: function() {
        return new Promise((resolve, reject) => {
          let tries = 0;
          _generateFindHash.call(this);
          function _generateFindHash(){
            this.findHash = crypto.randomBytes(32).toString('hex');
            this.save()
            .then(() => resolve(this.findHash))
            .catch(err => {
              if(tries > 3) return reject(err); // 500 error
              tries++;
              _generateFindHash.call(this);
            });
          }
        });
      },
    },
  });
};
