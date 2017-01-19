import Sequelize from 'sequelize';

export default function Status(sequelize){
  return sequelize.define('status', {
    name: {
      type: Sequelize.STRING,
    },
  });
}
