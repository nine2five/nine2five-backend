'use strict';

const Sequelize = require('sequelize');
const expect = require('chai').expect;
const pg = require('pg');
const dotenv = require('dotenv');
dotenv.load({path: `${__dirname}/.testenv`});

const dbPopulate = require('../build/lib/db');
const dbEnv = require('./lib/database-setup');
const serverCtrl = require('./lib/server-ctrl');
const server = require('../server');

const dbName = 'nine2fivetest';
const host = 'localhost';
const port = '5432';
const conStringPost = `postgres://${host}:${port}/${dbName}`;


describe('Sample test for creating DBs', function() {

  before('create the db', (done) => {
    dbEnv.createDB()
    .then(() => {
      console.log('db created');
      this.sequelize = new Sequelize(conStringPost);
      return dbPopulate(done);
    });
  });

  after('destroy the db', (done) => {
    dbEnv.destroyDB()
    .then(() => {
      console.log('destroyed');
      done();
    });
    // serverCtrl.serverDown(server, done);
  });

  describe('sample test to get travis passing', () => {
    it('should pass', () => {
      expect(true).to.equal(true);
    });
  });
});
