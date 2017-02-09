module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue : false,
    },
  });
};
