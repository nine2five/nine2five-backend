import Sequelize from 'sequelize';
import User from './user';

export default function(sequelize){
  let Profile = sequelize.define('profile', {
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
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  });

  Profile.belongsTo(User);
  return Profile;
}
