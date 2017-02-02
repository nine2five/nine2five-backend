const Sequelize = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';

const sequelize = new Sequelize(DATABASE_URL);

module.exports = exports = {};

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
  exports[model] = sequelize.import(`${__dirname}/../model/${model}`);
});

(function(e) {
  e.application.belongsTo(e.user);
  e.application.belongsTo(e.offer);
  e.application.belongsTo(e.contact);
  e.resume.belongsTo(e.user);
  e.application.belongsTo(e.status);
  e.resume.belongsTo(e.category);
  e.profile.belongsTo(e.user);
})(exports);


module.exports = sequelize;
