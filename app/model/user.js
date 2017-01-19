import Sequelize from 'sequelize';

const User = {
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  isVerified: {
    type: Sequelize.BOOLEAN,
  },
};

export default User;
