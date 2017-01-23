'use strict';

const pg = require('pg');

const dbName = 'nine2fivetest';

const Pool = pg.Pool;
const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 5000,
});

module.exports = function(action, done) {

  return pool.query(`${action.toUpperCase()} DATABASE ${dbName}`)
  .then(() => pool.end(done));
};


// exports.createDB = function() {
//   return pool.connect()
//   .then(client => {
//     this.client = client;
//     return client.query(`CREATE DATABASE ${dbName}`);
//   })
//   .then(() => this.client.release())
//   .catch(console.error);
// };
//
// exports.destroyDB = function() {
//   return pool.connect()
//   .then(client => {
//     this.client = client;
//     return client.query(`DROP DATABASE ${dbName}`);
//   })
//   .then(() => this.client.release())
//   .catch(console.error);
// };
