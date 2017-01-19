import Sequelize from 'sequelize';

export default function Contact(sequelize){
  return sequelize.define('contact', {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
  });
}
