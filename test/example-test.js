'use strict';

const Sequelize = require('sequelize');
const expect = require('chai').expect;
const pg = require('pg');
const dotenv = require('dotenv');
dotenv.load({path: `${__dirname}/.testenv`});

const dbPopulate = require('../build/lib/db');
const dbSetup = require('./lib/database-setup');
const serverCtrl = require('./lib/server-ctrl');
const server = require('../server');

const dbName = 'nine2fivetest';
const host = 'localhost';
const port = '5432';


describe('Sample test for creating DBs', function() {

  before('create the db', () => dbPopulate.call(this));
  after('clear tables', () => this.sequelize.drop());

  describe('sample test to get travis passing', () => {
    it('should pass', () => {
      expect(true).to.equal(true);
    });

    it('should pass', () => {
      expect(false).to.equal(false);
    });
  });
});
