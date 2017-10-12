var db = require("../models");

module.exports = function(app) {

	app.get("/api/foremen", function(req, res) {
    db.Foremen.findAll({}).then(function(dbForemen) {
      res.json(dbForemen);
    });
  });

	app.post("/api/foremen", function(req, res) {
    db.Foremen.create({
      name: req.body.name,
      active: true
    }).then(function(dbForemen) {  
      res.json(dbForemen);
    });
  });

};