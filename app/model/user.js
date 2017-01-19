import Sequelize from 'sequelize';

export function User(sequelize){
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
