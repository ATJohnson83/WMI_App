module.exports = function(sequelize, DataTypes) {
  var Foremen = sequelize.define("Foremen", {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  });
  return Foremen;
};