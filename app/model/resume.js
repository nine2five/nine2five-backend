module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resume', {
    title: {
      type: DataTypes.STRING,
    },
    fileType: {
      type: DataTypes.STRING,
    },
    fileSrc: {
      type: DataTypes.STRING,
    },
  });
};
