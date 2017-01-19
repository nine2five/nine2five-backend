import Sequelize from 'sequelize';

const Profile = {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
};

export default Profile;
