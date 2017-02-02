'use strict';

const pg = require('pg');

let Pool = pg.Pool;
let pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 5000,
});

pool.query('CREATE DATABASE nine2fivetest');
