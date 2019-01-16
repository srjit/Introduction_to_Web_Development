

$(document).ready(function () {
     var person = prompt("Please enter your name to continue");
     if (person != null) {
	  document.getElementById("p1").innerHTML = person;
      }
});




function clickImg1() {
    $('#img1').hide();
    $('#img2').show();
}


function clickImg2() {
    $('#img2').hide();
    $('#img1').show();
}
