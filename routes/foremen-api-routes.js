var db = require("../models");

module.exports = function(app) {

	app.get("/api/foremen", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

	app.post("/api/foremen", function(req, res) {
    db.User.create({
      name: req.body.name,
      password: req.body.password,
      active: true
    }).then(function(dbUser) {  
      res.json(dbUser);
    });
  });

  app.delete("/api/foremen/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.put("/api/foremen/deactivate/:id", function(req, res) {
    db.User.update({
      active: false
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.put("/api/foremen/activate/:id", function(req, res) {
    db.User.update({
      active: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};