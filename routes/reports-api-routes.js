var db = require("../models");

module.exports = function(app) {

	app.get("/api/reports", function(req, res) {
    db.Reports.findAll({}).then(function(dbReports) {
      res.json(dbReports);
    });
  });

};