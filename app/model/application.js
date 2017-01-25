import Sequelize from 'sequelize';

const Application = {
  company: {
    type: Sequelize.STRING,
  },
  position: {
    type: Sequelize.STRING,
  },
  dateApplied: {
    type: Sequelize.DATE,
  },
  linkPosting: {
    type: Sequelize.STRING,
  },
  lastCommunication: {
    type: Sequelize.DATE,
  },
  interviewDate: {
    type: Sequelize.DATE,
  },
  additionalInfo: {
    type: Sequelize.TEXT,
  },
};

export default Application;
