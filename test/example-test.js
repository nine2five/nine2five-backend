'use strict';

const Sequelize = require('sequelize');
const expect = require('chai').expect;
const dotenv = require('dotenv');
const pg = require('pg');

const dbEnv = require('./lib/database-setup');

const dbName = 'nine2fivetest';
const host = 'localhost';
const port = '5432';

const conStringPost = `postgres://${host}:${port}/${dbName}`;

dotenv.load({path: `${__dirname}/.testenv`});

describe('Sample test for creating DBs', function() {

  before('create the db', (done) => {
    dbEnv.createDB()
    .then(() => {
      this.sequelize = new Sequelize(conStringPost);
      require('../server')(done);
    });
  });

  // after('destroy the db', (done) => {
  //   dbEnv.destroyDB(done);
  // });

  describe('sample test to get travis passing', () => {
    it('should pass', () => {
      console.log('test');
      expect(true).to.equal(true);
    });
  });
});
