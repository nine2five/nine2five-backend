import Sequelize from 'sequelize';

const Offer = {
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
};

export default Offer;
