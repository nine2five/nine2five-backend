'use strict';

import pg from 'pg';

function query(client) {
  return client.query(
    `CREATE TABLE IF NOT EXISTS
    offers(
      id SERIAL PRIMARY KEY,
      date DATE,
      salary INTEGER,
      benefits TEXT,
      accepted BOOLEAN
    )`
  );
}

export default query;
