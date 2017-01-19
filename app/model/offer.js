import Sequelize from 'sequelize';

export function Offer(sequelize){
  return sequelize.define('offer', {
    date: {
      type: Sequelize.DATE,
    },
    salary: {
      type: Sequelize.INTEGER,
    },
    benefits: {
      type: Sequelize.TEXT,
    },
    accepted: {
      type: Sequelize.BOOLEAN,
    },
  });
}
