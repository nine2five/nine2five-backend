module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offer', {
    date: {
      type: DataTypes.DATE,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
    benefits: {
      type: DataTypes.TEXT,
    },
    accepted: {
      type: DataTypes.BOOLEAN,
    },
  });
};
