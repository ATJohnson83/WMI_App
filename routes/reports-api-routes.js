var db = require("../models");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function(app) {

	app.get("/api/reports/:job?/:sdate?/:edate?", function(req, res) {
		db.Reports.findAll({
			where: {
				job: req.params.job,
				date: {
					[Op.between]: [req.params.sdate, req.params.edate]
				}
			}
		}).then(function(dbReports) {
      res.json(dbReports);
		});
	});


	app.get("/api/reports", function(req, res) {
    db.Reports.findAll({}).then(function(dbReports) {
      res.json(dbReports);
    });
  });

	app.post("/api/reports",function(req, res){
		db.Reports.create({
			job: req.body.job,
			date: req.body.date,
			foreman: req.body.foreman,
			brick: req.body.brick,
			cmu: req.body.cmu,
			masons: req.body.masons,
			labor: req.body.labor,
			foremen: req.body.foremen,
			operators: req.body.operators,
			hours: req.body.hours,
			additional: req.body.additional
		}).then(function(dbReports){
			res.json(dbReports);
		});
	});


};