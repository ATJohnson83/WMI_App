$(document).ready(function() {

	var nameInput = $("#foreman-name");
	var foremenList = $("#ftblbdy");


	getForemen();

	function getForemen(){
		$.get("/api/foremen", function(data){
			var foremenRows = [];
			for (var i = 0; i < data.length; i++) {
				foremenRows.push(createForemanRow(data[i]));
			}
			// renderForemenList(foremenRows);
			// nameInput.val('');
		});
	}

	function createForemanRow(foremanData){
		var newTr = $('<tr>');
		newTr.append("<td>" + foermanData.name + "</td></tr>");
		foremenList.append(newTr);
	};


	// function renderForemenList();


});