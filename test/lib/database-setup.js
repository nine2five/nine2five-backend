'use strict';

const pg = require('pg');

const dbName = 'nine2fivetest';

var Pool = pg.Pool;
var pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 5000,
});

exports.createDB = function() {
  return pool.connect()
  .then(client => client.query('CREATE DATABASE ' + dbName))
  .then(client => client.release())
  .catch(console.error);
};

exports.destroyDB = function(done) {
  return pool.connect()
  .then(client => client.query('DROP DATABASE ' + dbName))
  .then(client => client.release())
  .then(done)
  .catch(console.error);
};
