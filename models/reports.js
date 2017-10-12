module.exports = function(sequelize, DataTypes) {
  var Reports = sequelize.define("Reports", {
    job: DataTypes.STRING,
    date: DataTypes.DATE,
    foreman: DataTypes.STRING,
    brick: DataTypes.INTEGER,
    cmu: DataTypes.INTEGER,
    masons: DataTypes.INTEGER,
    labor: DataTypes.INTEGER,
    foremen: DataTypes.INTEGER,
   	operators: DataTypes.INTEGER,
   	hours: DataTypes.INTEGER,
   	additional: DataTypes.TEXT
  });
  return Reports;
};