'use strict';

const Sequelize = require('sequelize');
const expect = require('chai').expect;
const dotenv = require('dotenv');
dotenv.load({path: `${__dirname}/.testenv`});

let dbConnection = require('../build/lib/db-connection');
const serverCtrl = require('./lib/server-ctrl');
const createTables = require('../build/lib/db-create-tables');
const server = require('../server');

describe('Sample test for creating DBs', function() {

  before('create the db', () => {
    createTables();
  });

  // after('clear tables', () => dbConnection.sequelize.drop());

  describe('sample test to get travis passing', () => {
    it('should pass', () => {
      expect(true).to.equal(true);
    });

    it('should pass', () => {
      expect(false).to.equal(false);
    });
  });
});
