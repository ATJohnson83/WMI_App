$(document).ready(function() {

	$(document).on("click", "#fsubmit", addReport);

  loggedInForeman();
	personelMenu();
  getForemen();
  getJobs();

	$('#date').datepicker({
      changeMonth: true,
      changeYear: false,
      dateFormat: 'yy-mm-dd'
   });

  function loggedInForeman(){
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.name);
    });
  };

  function getForemen(){
    $.get("/api/foremen", function(data){
      for (var i = 0; i < data.length; i++) {
        foremenMenu(data[i].name);
      }
    });
  };

  function foremenMenu(fName){ 
      $("#fname").append('<option>'+fName+'</option>');
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


	function personelMenu(){
	  for (i=0;i<=50;i++){
	    $(".1-50").append($('<option></option>').val(i).html(i))
	  };
	  for (j=0;j<=5;j++){
	    $(".1-5").append($('<option></option>').val(j).html(j))
	  };
	  for (k=0;k<=13;k+=.5){
	    $(".1-12").append($('<option></option>').val(k).html(k))
	  };
	};

	function addReport(event) {
    event.preventDefault(); 
    var report= {
      job: $('#jname').val().trim(),
      date: $('#date').val(),
      foreman: $('#fname').val().trim(),
      brick: $('#brick').val().trim(),
      cmu: $('#cmu').val().trim(),
      masons: $('#masons').val().trim(),
      labor: $('#labor').val().trim(),
      foremen: $('#foremen').val().trim(),
      operators: $('#operators').val().trim(),
      hours: $('#hours').val().trim(),
      additional: $('#additional').val().trim()
    };
    $.post("/api/reports",report,);
  }


});

