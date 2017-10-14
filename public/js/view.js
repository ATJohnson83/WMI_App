$(document).ready(function() {

	var reportList = $('#rtblbdy');
	getJobs();

	$('#getreport').click(function(){
		clearView();
		getReports();
	});

	$('#getallreports').click(function(){
		clearView();
		getAllReports();
	});

	$('#startDate').datepicker({
      changeMonth: true,
      changeYear: false,
      dateFormat: 'yy-mm-dd'
   });

	$('#endDate').datepicker({
      changeMonth: true,
      changeYear: false,
      dateFormat: 'yy-mm-dd'
   });

	function clearView(){
		$('#rtblbdy').empty();
	};

	function getJobs(){
    $.get("/api/jobs", function(data){
      for (var i = 0; i < data.length; i++) {
        jobMenu(data[i].name);
      }
    });
  };
	
	function jobMenu(jobName){ 
	    $("#jname").append('<option>'+jobName+'</option>');
	};

	function getAllReports(){
		$.get("/api/allreports", function(data){
			console.log("all reports data: " + data);
	    for (var i = 0; i < data.length; i++) {
	    	createReportRow(data[i]);
	    }
		});
	};
	
	function getReports(){
		var job = $('#jname').val().trim();
		var sdate = $('#startDate').val().trim();
		var edate = $('#endDate').val().trim();

		$.get("/api/reports/"+job+"/"+sdate+"/"+edate , function(data){
	    for (var i = 0; i < data.length; i++) {
	    	createReportRow(data[i]);
	    }
		});
	};

	function createReportRow(reportData){
		var newTr = $('<tr>');
		newTr.append("<td>" +reportData.date+ "</td>");
		newTr.append("<td>"+reportData.foreman+"</td>");
		newTr.append("<td>"+reportData.brick+"</td>");
		newTr.append("<td>"+reportData.cmu+"</td>");
		newTr.append("<td>"+reportData.masons+"</td>");
		newTr.append("<td>"+reportData.labor+"</td>");
		newTr.append("<td>"+reportData.foremen+"</td>");
		newTr.append("<td>"+reportData.operators+"</td>");
		newTr.append("<td>"+reportData.hours+"</td>");
		newTr.append("<td>"+reportData.additional+"</td>");
		newTr.append("</tr>");
		reportList.append(newTr);
	}

});