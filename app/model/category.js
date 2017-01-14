'use strict';

import pg from 'pg';

function query(client) {

  return client.query(
    `CREATE TABLE IF NOT EXISTS
    categories(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
    )`
  );
}

export default query;
