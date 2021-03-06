module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profile', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      getterMethods: {
        fullName : function() { return this.firstName + this.lastName;},
      },
    });
};
