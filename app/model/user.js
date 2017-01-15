'use strict';

import pg from 'pg';

function query(client) {
  return client.query(
    `CREATE TABLE IF NOT EXISTS
    users(
      id SERIAL PRIMARY KEY,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      is_verified BOOLEAN DEFAULT false
    )`
  );
}

export default query;
