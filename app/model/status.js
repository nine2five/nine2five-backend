import Sequelize from 'sequelize';

export function Status(sequelize){
  return sequelize.define('status', {
    name: {
      type: Sequelize.STRING,
    },
  });
}
