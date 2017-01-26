import Sequelize from 'sequelize';

import UserModel from '../model/user';
import ProfileModel from '../model/profile';
import CategoryModel from '../model/category';
import StatusModel from '../model/status';
import ResumeModel from '../model/resume';
import ContactModel from '../model/contact';
import OfferModel from '../model/offer';
import ApplicationModel from '../model/application';

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';

module.exports = function() {
  this.sequelize = new Sequelize(DATABASE_URL);

  let User = this.sequelize.define('user', UserModel);
  let Profile = this.sequelize.define('profile', ProfileModel);
  let Category = this.sequelize.define('category', CategoryModel);
  let Status = this.sequelize.define('status', StatusModel);
  let Resume = this.sequelize.define('resume', ResumeModel);
  let Contact = this.sequelize.define('contact', ContactModel);
  let Offer = this.sequelize.define('offer', OfferModel);
  let Application = this.sequelize.define('application', ApplicationModel);

  Application.belongsTo(User);
  Application.belongsTo(Offer);
  Application.belongsTo(Contact);
  Resume.belongsTo(User);
  Application.belongsTo(Status);
  Resume.belongsTo(Category);
  Profile.belongsTo(User);


  return this.sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been started');
    return User.sync({});
  })
  .then(() => Profile.sync({}))
  .then(() => Category.sync({}))
  .then(() => Status.sync({}))
  .then(() => Resume.sync({}))
  .then(() => Contact.sync({}))
  .then(() => Offer.sync({}))
  .then(() => Application.sync({}))
  .catch(err => {
    console.log('Unable to connect', err);
    throw err;
  });
};
