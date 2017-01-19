import Sequelize from 'sequelize';

import User from './build/model/user';
import Profile from './build/model/profile';
import Category from './build/model/category';
import Status from './build/model/status';
import Resume from './build/model/resume';
import Contact from './build/model/contact';
import Offer from './build/model/offer';
import Application from './build/model/application';

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';
const sequelize = new Sequelize(DATABASE_URL);

User = sequelize.define('user', User);
Profile = sequelize.define('profile', Profile);
Category = sequelize.define('category', Category);
Status = sequelize.define('status', Status);
Resume = sequelize.define('resume', Resume);
Contact = sequelize.define('contact', Contact);
Offer = sequelize.define('offer', Offer);
Application = sequelize.define('application', Application);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been started');
  })
  .then(User.sync)
  .then(Profile.sync)
  .then(Category.sync)
  .then(Status.sync)
  .then(Resume.sync)
  .then(Contact.sync)
  .then(Offer.sync)
  .then(Application.sync)
  .catch(err => {
    console.log('Unable to connect', err);
  });

export default sequelize;
