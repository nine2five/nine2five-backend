module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user',
    {
      password: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
      },
    });
};
