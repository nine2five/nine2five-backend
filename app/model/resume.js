module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resume', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'My Resume',
    },
    fileType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fileSrc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
