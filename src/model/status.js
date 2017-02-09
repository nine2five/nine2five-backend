module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
