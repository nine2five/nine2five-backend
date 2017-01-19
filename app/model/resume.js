import Sequelize from 'sequelize';


const Resume = {
  title: {
    type: Sequelize.STRING,
  },
  fileType: {
    type: Sequelize.STRING,
  },
  fileSrc: {
    type: Sequelize.STRING,
  },

};

export default Resume;
