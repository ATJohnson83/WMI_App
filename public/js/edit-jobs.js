$(document).ready(function() {
	// alert('jobs-test');
	$.get("/api/jobs", function(data){
			console.log(data);
	});
});