$(document).ready(function() {
	
	var nameInput = $("#job-name");
	var activeJobsList = $("#ajtblbdy");
	var unactiveJobsList = $("#djtblbdy");

	$(document).on("submit", "#addjob", addJob);
	$(document).on("click", "button.j_delete", deleteJob);
	$(document).on("click", "button.j_deactivate", deactivateJob);
	$(document).on("click", "button.j_activate", activateJob);
	
	getJobs();

	function resetList(){
		activeJobsList.empty();
  	unactiveJobsList.empty();
  	getJobs();
	}

	function getJobs(){
		$.get("/api/jobs", function(data){
			console.log(data);
			var activeJobsRows = [];
			var unactiveJobsRows = [];

			for (var i = 0; i < data.length; i++) {
				console.log(data[i].active);
				if(data[i].active == true){
				activeJobsRows.push(createActiveJobRow(data[i]));
				}
				else{
					unactiveJobsRows.push(createDeactiveJobRow(data[i]));
				}
			}
		});
	}

	function createActiveJobRow(ajobData){
		var newTr = $('<tr>');
		newTr.append("<td data-name='" + ajobData.name + "'>" + ajobData.name + "</td>");
		newTr.append("<td><button data-id='"+ajobData.id+"' class='j_deactivate btn btn-primary glyphicon glyphicon-hand-down'></button></td>");
		newTr.append("<td><button data-id='"+ajobData.id+"' class='j_delete btn btn-danger glyphicon glyphicon-remove'></button></td>");
		newTr.append("</tr>");
		activeJobsList.append(newTr);
	}
	
	function createDeactiveJobRow(djobData){
		var newTr = $('<tr>');
		newTr.append("<td data-name='" + djobData.name + "'>" + djobData.name + "</td>");
		newTr.append("<td><button data-id='"+djobData.id+"' class='j_activate btn btn-primary glyphicon glyphicon-hand-up'></button></td>");
		newTr.append("<td><button data-id='"+djobData.id+"' class='j_delete btn btn-danger glyphicon glyphicon-remove'></button></td>");
		newTr.append("</tr>");
		unactiveJobsList.append(newTr);
	}

	function addJob(event) {
    event.preventDefault(); 
    var job = {
      name: nameInput.val().trim(),
    };
    $.post("/api/jobs",job,resetList);
    nameInput.val("");
  }

	function deleteJob(event){
		event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/jobs/" + id
    }).done(resetList);
	}

	function deactivateJob (event){
		event.stopPropagation();
		var id = $(this).data("id");
    $.ajax({
      method: "PUT",
      url: "/api/jobs/deactivate/" + id
    }).done(resetList);
	}

	function activateJob (event){
		event.stopPropagation();
		var id = $(this).data("id");
    $.ajax({
      method: "PUT",
      url: "/api/jobs/activate/" + id
    }).done(resetList);
	}

});

