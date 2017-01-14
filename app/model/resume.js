'use strict';

import pg from 'pg';

function query(client) {

  return client.query(
    `CREATE TABLE IF NOT EXISTS
    resumes(
      id SERIAL PRIMARY KEY,
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(category_id) REFERENCES categories(id),
      title VARCHAR(50) NOT NULL,
      fileType VARCHAR(40) NOT NULL,
      fileSrc VARCHAR(40) NOT NULL,
      uploadDate DATE NOT NULL,
    )`
  );
}

export default query;
