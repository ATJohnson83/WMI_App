var db = require("../models");

module.exports = function(app) {

	app.get("/api/foremen", function(req, res) {
    db.Foremen.findAll({}).then(function(dbForemen) {
      res.json(dbForemen);
    });
  });

};