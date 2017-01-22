'use strict';

const pg = require('pg');

const dbName = 'nine2fivetest';
const host = 'localhost';
const port = '5432';

const conStringPri = `postgres://${host}:${port}/postgres`;

module.exports = function() {
  return pg.connect(conStringPri)
  .then(client => {
    // client.on('drain', client.end.bind(client));
    client.query('CREATE DATABASE ' + dbName);
    return client;
  })
  .catch(console.error);
};
