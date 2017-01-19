import Sequelize from 'sequelize';

export default function Category(sequelize){
  return sequelize.define('category', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
}
