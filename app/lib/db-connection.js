'use strict';

const Sequelize = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';

const sequelize = new Sequelize(DATABASE_URL);

const db = {};

let models = [
  'application',
  'category',
  'contact',
  'offer',
  'profile',
  'resume',
  'status',
  'user',
];

models.forEach(function(model) {
  db[model] = sequelize.import(`${__dirname}/../model/${model}`);
});

db.application.belongsTo(db.user);
db.application.belongsTo(db.offer);
db.application.belongsTo(db.contact);
db.resume.belongsTo(db.user);
db.application.belongsTo(db.status);
db.resume.belongsTo(db.category);
db.profile.belongsTo(db.user);


db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
