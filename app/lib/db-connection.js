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
  e.Application.belongsTo(e.User);
  e.Application.belongsTo(e.Offer);
  e.Application.belongsTo(e.Contact);
  e.Resume.belongsTo(e.User);
  e.Application.belongsTo(e.Status);
  e.Resume.belongsTo(e.Category);
  e.Profile.belongsTo(e.User);
})(exports);

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
