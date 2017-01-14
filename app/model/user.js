'use strict';

import pg from 'pg';

function query(client) {

  return client.query(
    `CREATE TABLE IF NOT EXISTS
    users(
      id SERIAL PRIMARY KEY,
      password VARCHAR(40) NOT NULL,
      email VARCHAR(256),
      is_verified BOOLEAN DEFAULT false
    )`
  );
}

export default query;
