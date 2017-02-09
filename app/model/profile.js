module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profile', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },{
    getterMethods: {
      fullName : function() { return this.firstName + this.lastName;},
    },
    setterMethods: {

    },
  });
};