import Sequelize from 'sequelize';

export function User(sequelize){
  return sequelize.define('user', {
    password: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    isVerified: {
      type: Sequelize.BOOLEAN,
    },
  });
}

// import pg from 'pg';
//
// function query(client) {
//   return client.query(
//     `CREATE TABLE IF NOT EXISTS
//     users(
//       id SERIAL PRIMARY KEY,
//       password VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       is_verified BOOLEAN DEFAULT false
//     )`
//   );
// }
//
// export default query;
