$(document).ready(function () {

    if (!localStorage.getItem('name')) {
	setUserName();
    } else {
	var storedName = localStorage.getItem('name');
	document.getElementById("p1").innerHTML = storedName;
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


function changeUser() {
    var person = prompt("Please enter your name to continue");
    localStorage.setItem('name', person);
    document.getElementById("p1").innerHTML = person;
}

