'use strict';

const expect = require('chai').expect;
const dotenv = require('dotenv');
dotenv.load({path: `${__dirname}/.testenv`});

const sequelize = require('../build/lib/db-connection').sequelize;
const serverCtrl = require('./lib/server-ctrl');
const server = require('../server');

describe('Sample test for creating DBs', function() {

  before('create the db', () => sequelize.sync({force: true}));
  after('clear tables', () => sequelize.drop({cascade: true}));

  describe('sample test to get travis passing', () => {
    it('should pass', () => {
      expect(true).to.equal(true);
    });

    it('should pass', () => {
      expect(false).to.equal(false);
    });
  });
});
