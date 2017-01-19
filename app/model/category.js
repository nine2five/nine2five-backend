import Sequelize from 'sequelize';

const Category = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};

export default Category;
