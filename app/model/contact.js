'use strict';

import pg from 'pg';

function query(client) {
  return client.query(
    `CREATE TABLE IF NOT EXISTS
    contacts(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255),
      phone VARCHAR(20),
      title VARCHAR(255)
    )`
  );
}

export default query;
