module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  });
  return Jobs;
};