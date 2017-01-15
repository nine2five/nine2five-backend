'use strict';

import pg from 'pg';

function query(client) {
  return client.query(
    `CREATE TABLE IF NOT EXISTS
    profiles(
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      first_name VARCHAR(255),
      last_name VARCHAR(255),
      user_id INTEGER,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )`
  );
}

export default query;
