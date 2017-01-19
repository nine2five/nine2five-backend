import Sequelize from 'sequelize';

export function Category(sequelize){
  return sequelize.define('category', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
}
