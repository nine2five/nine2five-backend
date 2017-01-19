import Sequelize from 'sequelize';

export default function User(sequelize){
  return sequelize.define('user', {
    password: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    isVerified: {
      type: Sequelize.BOOLEAN,
    },
  });
}
