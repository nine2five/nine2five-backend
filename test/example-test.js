'use strict';

const Sequelize = require('sequelize');
const expect = require('chai').expect;
const pg = require('pg');

const dbEnv = require('./lib/database-setup');

const dbName = 'nine2fivetest';
const host = 'localhost';
const port = '5432';

const conStringPost = `postgres://${host}:${port}/${dbName}`;

describe('Sample test for creating DBs', function() {

  before('create the db', (done) => {
    dbEnv.createDB(done)
    .then(() => this.sequelize = new Sequelize(conStringPost));
  });

  after('destroy the db', (done) => {
    dbEnv.destroyDB(done);
  });

  describe('sample test to get travis passing', () => {
    it('should pass', () => {
      console.log('test');
      expect(true).to.equal(true);
    });
  });
});
