$(document).ready(function() {
	
	var nameInput = $("#foreman-name");
	var passwordInput = $("#foreman-password");
	var activeForemenList = $("#aftblbdy");
	var unactiveForemenList = $("#dftblbdy");

	$(document).on("submit", "#addforeman", addForeman);
	$(document).on("click", "button.f_delete", deleteForeman);
	$(document).on("click", "button.f_deactivate", deactivateForeman);
	$(document).on("click", "button.f_activate", activateForeman);
	$('#dusershow').click(showDeactive);
	$('#duserhide').click(hideDeactive);


	hideDeactive();
	getForemen();

	function hideDeactive(){
		unactiveForemenList.hide()
	}

	function showDeactive(){
		unactiveForemenList.show()
	}

	function resetList(){
		activeForemenList.empty();
  	unactiveForemenList.empty();
  	getForemen();
	}

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
		});
	}

	function createActiveForemanRow(aforemanData){
		var newTr = $('<tr>');
		newTr.append("<td data-name='" + aforemanData.name + "'>" + aforemanData.name + "</td>");
		newTr.append("<td data-name='" + aforemanData.password + "'>" + aforemanData.password + "</td>");
		newTr.append("<td><button data-id='"+aforemanData.id+"' class='f_deactivate btn btn-primary glyphicon glyphicon-hand-down'></button></td>");
		newTr.append("<td><button data-id='"+aforemanData.id+"' class='f_delete btn btn-danger glyphicon glyphicon-remove'></button></td>");
		newTr.append("</tr>");
		activeForemenList.append(newTr);
	}
	
	function createDeactiveForemanRow(dforemanData){
		var newTr = $('<tr>');
		newTr.append("<td data-name='" + dforemanData.name + "'>" + dforemanData.name + "</td>");
		newTr.append("<td><button data-id='"+dforemanData.id+"' class='f_activate btn btn-primary glyphicon glyphicon-hand-up'></button></td>");
		newTr.append("<td><button data-id='"+dforemanData.id+"' class='f_delete btn btn-danger glyphicon glyphicon-remove'></button></td>");
		newTr.append("</tr>");
		unactiveForemenList.append(newTr);
	}

	function addForeman(event) {
    event.preventDefault(); 
    var foreman = {
      name: nameInput.val().trim(),
      password: passwordInput.val().trim()
    };
    $.post("/api/foremen",foreman,resetList);
    nameInput.val("");
    passwordInput.val("");
  }

	function deleteForeman(event){
		event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/foremen/" + id
    }).done(resetList);
	}

	function deactivateForeman (event){
		event.stopPropagation();
		var id = $(this).data("id");
    $.ajax({
      method: "PUT",
      url: "/api/foremen/deactivate/" + id
    }).done(resetList);
	}

	function activateForeman (event){
		event.stopPropagation();
		var id = $(this).data("id");
    $.ajax({
      method: "PUT",
      url: "/api/foremen/activate/" + id
    }).done(resetList);
	}

});

