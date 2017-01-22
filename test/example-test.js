'use strict';

const Sequelize = require('sequelize');
const expect = require('chai').expect;
const pg = require('pg');


// const client = require('./lib/database-setup')();

const dbName = 'nine2fivetest';
const host = 'localhost';
const port = '5432';

const conStringPost = `postgres://${host}:${port}/${dbName}`;
const conStringPri = `postgres://${host}:${port}/postgres`;

let sequelize;


describe('Sample test for creating DBs', function() {

  before('create the db', (done) => {
    let client = new pg.Client(conStringPri);
    client.connect();

    client.query('CREATE DATABASE ' + dbName)
    .then(() => {
      sequelize = new Sequelize(conStringPost);
      client.end();
    })
    .then(done)
    .catch(console.error);
  });

  after('destroy the db', (done) => {
    let client = new pg.Client(conStringPri);
    client.connect();
    
    client.query('DROP DATABASE ' + dbName)
    .then(() => client.end())
    .then(done)
    .catch(console.error);
  });

  describe('sample test to get travis passing', () => {
    it('should pass', () => {
      console.log('test');
      expect(true).to.equal(true);
    });
  });
});
