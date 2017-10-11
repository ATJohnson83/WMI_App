module.exports = function(sequelize, DataTypes) {
  var Foremen = sequelize.define("foremen", {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  });
  return Foremen;
};