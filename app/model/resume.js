import Sequelize from 'sequelize';
import User from './user';
import Category from './category';

export function Resume(sequelize){
  return sequelize.define('resume', {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    categoryID: {
      type: Sequelize.INTEGER,
      references: {
        model: Category,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    title: {
      type: Sequelize.STRING,
    },
    fileType: {
      type: Sequelize.STRING,
    },
    fileSrc: {
      type: Sequelize.STRING,
    },
  });
}
