import Sequelize from 'sequelize';

const Contact = {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
};

export default Contact;
