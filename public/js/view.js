$(document).ready(function() {
	alert('reports-test');
	$.get("/api/reports", function(data){
		console.log(data);
	});
});