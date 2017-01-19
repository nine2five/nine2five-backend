'use strict';

const Sequelize = require('sequelize');


const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';

const sequelize = new Sequelize(DATABASE_URL);

let User = require('./build/model/user').User(sequelize);
console.log(User, 'User');
// User = User(sequelize);
// const Application = require('./build/model/application')(sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been started');
    User.sync({force: true});
  })
  .catch(err => {
    console.log('Unable to connect', err);
  });
