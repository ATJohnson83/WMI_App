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

  app.delete("/api/foremen/:id", function(req, res) {
    db.Foremen.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbForemen) {
      res.json(dbForemen);
    });
  });

  app.put("/api/foremen/deactivate/:id", function(req, res) {
    db.Foremen.update({
      active: false
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbForemen) {
      res.json(dbForemen);
    });
  });

  app.put("/api/foremen/activate/:id", function(req, res) {
    db.Foremen.update({
      active: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbForemen) {
      res.json(dbForemen);
    });
  });

};