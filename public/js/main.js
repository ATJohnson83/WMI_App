$(document).ready(function() {

	var loginBtn = $("#loginbtn");
	var userName = $("#name-input").val().trim();
	var userPassword = $("#password-input").val().trim();

  getUsers();

	function getUsers(){
    $.get("/api/foremen", function(data){
      for (var i = 0; i < data.length; i++) {
        userMenu(data[i].name);
      }
    });
  };

  function userMenu(userName){ 
      $("#name-input").append('<option>'+userName+'</option>');
  };

	loginBtn.click(function(event) {
    alert('login btn working')
    event.preventDefault();
    var userData = {
      name: userName,
      password: userPassword
    };
    if (!userData.name || !userData.password) {
      return;
    }
    loginUser(userData.name, userData.password);
    userName.val("");
    userPassword.val("");
  });

  function loginUser(name, password) {
  	if(name == "Management"){
  		$.post("/api/login/mgmt", {
      	name: name,
      	password: password
    	}).then(function(data) {
      	window.location.replace(data);
    	}).catch(function(err) {
      	console.log(err);
    	});
  	}
  	else{
    	$.post("/api/login", {
     	 	name: name,
      	password: password
    	}).then(function(data) {
     	 	window.location.replace(data);
    	}).catch(function(err) {
      	console.log(err);
    	});
    }
  };


});