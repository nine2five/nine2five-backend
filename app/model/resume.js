module.exports = function(sequelize, DataTypes) {
  sequelize.define('resume', {
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
