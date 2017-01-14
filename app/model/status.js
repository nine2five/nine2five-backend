'use strict';

import pg from 'pg';

function query(client) {

  return client.query(
    `CREATE TABLE IF NOT EXISTS
    statuses(
      id SERIAL PRIMARY KEY,
      name VARCHAR(40)
    )`
  );
}

export default query;
