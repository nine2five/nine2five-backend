'use strict';

const Sequelize = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';

const sequelize = new Sequelize(DATABASE_URL);

let User = require('./build/model/user').User(sequelize);
let Profile = require('./build/model/profile').Profile(sequelize);
let Category = require('./build/model/category').Category(sequelize);
let Status = require('./build/model/status').Status(sequelize);
let Resume = require('./build/model/resume').Resume(sequelize);
let Contact = require('./build/model/contact').Contact(sequelize);
let Offer = require('./build/model/offer').Offer(sequelize);
let Application = require('./build/model/application').Application(sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been started');
  })
  .then( () => User.sync())
  .then( () => Profile.sync())
  .then( () => Category.sync())
  .then( () => Status.sync())
  .then( () => Resume.sync())
  .then( () => Contact.sync())
  .then( () => Offer.sync())
  .then( () => Application.sync())
  .catch(err => {
    console.log('Unable to connect', err);
  });
