'use strict';

import pg from 'pg';

function query(client) {

  return client.query(
    `CREATE TABLE IF NOT EXISTS
    resume(
      id SERIAL PRIMARY KEY,
      FOREIGN KEY(user_id) REFERENCES user(id),
      FOREIGN KEY(category_id) REFERENCES category(id),
      title VARCHAR(50) NOT NULL,
      fileType VARCHAR(40) NOT NULL,
      fileSrc VARCHAR(40) NOT NULL,
      uploadDate DATE NOT NULL,
    )`
  );
}

export default query;
