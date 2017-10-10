
$(function personelMenu(){
  
  for (i=0;i<=50;i++){
    $(".1-50").append($('<option></option>').val(i).html(i))
  }
  
  for (j=0;j<=5;j++){
    $(".1-5").append($('<option></option>').val(j).html(j))
  }
  
  for (k=0;k<=13;k+=.5){
    $(".1-12").append($('<option></option>').val(k).html(k))
  }
});

