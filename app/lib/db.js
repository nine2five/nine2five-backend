import Sequelize from 'sequelize';

import User from '../model/user';
import Profile from '../model/profile';
import Category from '../model/category';
import Status from '../model/status';
import Resume from '../model/resume';
import Contact from '../model/contact';
import Offer from '../model/offer';
import Application from '../model/application';

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';
const sequelize = new Sequelize(DATABASE_URL);

let UserModel = sequelize.define('user', User);
let ProfileModel = sequelize.define('profile', Profile);
let CategoryModel = sequelize.define('category', Category);
let StatusModel = sequelize.define('status', Status);
let ResumeModel = sequelize.define('resume', Resume);
let ContactModel = sequelize.define('contact', Contact);
let OfferModel = sequelize.define('offer', Offer);
let ApplicationModel = sequelize.define('application', Application);

ApplicationModel.belongsTo(UserModel);
ApplicationModel.belongsTo(OfferModel);
ApplicationModel.belongsTo(ContactModel);
ResumeModel.belongsTo(UserModel);
ApplicationModel.belongsTo(StatusModel);
ResumeModel.belongsTo(CategoryModel);
ProfileModel.belongsTo(UserModel);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been started');
  })
  .then(() => UserModel.sync({}))
  .then(() => ProfileModel.sync({}))
  .then(() => CategoryModel.sync({}))
  .then(() => StatusModel.sync({}))
  .then(() => ResumeModel.sync({}))
  .then(() => ContactModel.sync({}))
  .then(() => OfferModel.sync({}))
  .then(() => ApplicationModel.sync({}))
  .catch(err => {
    console.log('Unable to connect', err);
  });

export default sequelize;
