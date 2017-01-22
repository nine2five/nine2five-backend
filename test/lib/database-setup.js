'use strict';

const pg = require('pg');

const dbName = 'nine2fivetest';
const host = 'localhost';
const port = '5432';

const conStringPri = `postgres://${host}:${port}/postgres`;

exports.createDB = function() {
  let client = new pg.Client(conStringPri);
  client.connect();

  return client.query('CREATE DATABASE ' + dbName)
  .then(() => client.end())
  .catch(console.error);
};

exports.destroyDB = function() {
  let client = new pg.Client(conStringPri);
  client.connect();

  return client.query('DROP DATABASE ' + dbName)
  .then(() => client.end())
  .catch(console.error);
};
