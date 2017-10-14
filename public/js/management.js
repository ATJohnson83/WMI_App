$(document).ready(function() {

	loggedInMgmt();

	function loggedInMgmt(){
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.name);
    });
  };

});