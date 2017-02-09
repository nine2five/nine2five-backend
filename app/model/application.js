module.exports = function(sequelize, DataTypes) {
  return sequelize.define('application', {
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateApplied: {
      type: DataTypes.DATE,
    },
    linkPosting: {
      type: DataTypes.STRING,
    },
    lastCommunication: {
      type: DataTypes.DATE,
    },
    interviewDate: {
      type: DataTypes.DATE,
    },
    additionalInfo: {
      type: DataTypes.TEXT,
    },
  });
};
