var path = require("path");

module.exports = function(app) {

	app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get("/foreman", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/foreman.html"));
  });

  app.get("/management", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/management.html"));
  });

  app.get("/mgmt-edit", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mgmt-edit.html"));
  });

  app.get("/mgmt-view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mgmt-view.html"));
  });
};