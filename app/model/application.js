import Sequelize from 'sequelize';
import User from './user';
import Status from './status';
import Contact from './contact';
import Offer from './contact';


export function Application(sequelize){
  return sequelize.define('application', {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    statusId: {
      type: Sequelize.INTEGER,
      references: {
        model: Status,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    contactId: {
      type: Sequelize.INTEGER,
      references: {
        model: Contact,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    offerId: {
      type: Sequelize.INTEGER,
      references: {
        model: Offer,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
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
  });
}

Application.belongsTo(User);
