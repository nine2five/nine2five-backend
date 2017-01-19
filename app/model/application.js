import Sequelize from 'sequelize';
import User from './user';
import Status from './status';
import Contact from './contact';
import Offer from './contact';


export default function Application(sequelize){
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

// import pg from 'pg';
//
// function query(client) {
//   return client.query(
//     `CREATE TABLE IF NOT EXISTS
//     applications(
//       id SERIAL PRIMARY KEY,
//       user_id INTEGER,
//       FOREIGN KEY(user_id) REFERENCES users(id),
//       status_id INTEGER,
//       FOREIGN KEY(status_id) REFERENCES statuses(id),
//       company VARCHAR(255),
//       position VARCHAR(255),
//       date_applied DATE,
//       contact_id INTEGER,
//       FOREIGN KEY(contact_id) REFERENCES contacts(id),
//       link_posting TEXT,
//       last_communication DATE,
//       interview_date DATE,
//       additional_info TEXT,
//       offer_id INTEGER,
//       FOREIGN KEY(offer_id) REFERENCES offers(id)
//     )`
//   );
// }
//
// export default query;
