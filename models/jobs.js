module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("jobs", {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  });
  return Jobs;
};