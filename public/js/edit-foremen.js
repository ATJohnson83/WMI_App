$(document).ready(function() {
	// alert('foremen-test');
	
	var nameInput = $("#foreman-name");
	var activeForemenList = $("#aftblbdy");
	var unactiveForemenList = $("#uftblbdy");


	
	getForemen();

	function getForemen(){
		$.get("/api/foremen", function(data){
			console.log(data);
			var activeForemenRows = [];
			var unactiveForemenRows = [];

			for (var i = 0; i < data.length; i++) {
				console.log(data[i].active);
				if(data[i].active == true){
				activeForemenRows.push(createActiveForemanRow(data[i]));
				}
				else{
					unactiveForemenRows.push(createDeactiveForemanRow(data[i]));
				}
			}
			// renderForemenList(foremenRows);
			// nameInput.val('');
		});
	}

	function createActiveForemanRow(aforemanData){
		var newTr = $('<tr>');
		newTr.append("<td data-name='" + aforemanData.name + "'>" + aforemanData.name + "</td>");
		newTr.append("<td><button data-id='"+aforemanData.id+"' class='btn btn-primary'>Deactivate</button></td>");
		newTr.append("<td><button data-id='"+aforemanData.id+"' class='btn btn-danger'>Delete</button></td>");
		newTr.append("</tr>");
		activeForemenList.append(newTr);
	};
	function createDeactiveForemanRow(dforemanData){
		var newTr = $('<tr>');
		newTr.append("<td data-name='" + dforemanData.name + "'>" + dforemanData.name + "</td>");
		newTr.append("<td><button data-id='"+dforemanData.id+"' class='btn btn-primary'>Activate</button></td>");
		newTr.append("<td><button data-id='"+dforemanData.id+"' class='btn btn-danger'>Delete</button></td>");
		newTr.append("</tr>");
		unactiveForemenList.append(newTr);
	};
});


