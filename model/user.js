'use strict';

import pg from 'pg';

function query(client) {

  client.query(
    `CREATE TABLE IF NOT EXISTS
    items(
      id SERIAL PRIMARY KEY,
      text VARCHAR(40) not null,
      complete BOOLEAN
    )`
  );
}

export default query;
