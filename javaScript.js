function printName(){
	var input = document.getElementById("nameInput");
	if(input.checkValidity() == true){
		document.getElementById("nameOutput").innerHTML = "Welcome " + document.getElementById("nameInput").value;
	}
}

function changeColor(){
	var bC=document.getElementById("radioButtonForm");
	if(document.getElementById("redRadio").checked == true){
		bC.style.backgroundColor = "red";
	}else if(document.getElementById("greenRadio").checked == true){
		bC.style.backgroundColor = "lightgreen";
	}else if(document.getElementById("blueRadio").checked == true){
		bC.style.backgroundColor = "lightblue";
	}
}

function clearColor(){
	var checked = document.getElementById("yesBox").checked;
	if(checked == true){
		var bC=document.getElementById("radioButtonForm");
		bC.style.backgroundColor = "transparent"
	}else{
		var bC = document.getElementById("radioButtonForm");
		bC.style.backgroundColor = "transparent";
	}
}

function change(colorChanger){
	var bC = document.getElementById("radioButtonForm");
	switch(colorChanger){
		case 1:
			bC.style.backgroundColor = "red";

		break;
		case 2:
			bC.style.backgroundColor = "green";
			
		break;
		case 3:
			bC.style.backgroundColor = "blue";
			
		break;
	}
}


var calculation = "";

function calc(){
	if(calculation != ""){
		document.getElementById("calcOutput").innerHTML = Math.floor(eval(calculation));
		document.getElementById("calcOutput").value = Math.floor(eval(calculation));
		calculation = document.getElementById("calcOutput").value;	
	}
}

function addNumber(num){
	calculation += num;
	document.getElementById("calcOutput").innerHTML = calculation;
}

function delCalculation(){
	calculation = "";
	document.getElementById("calcOutput").innerHTML = "";
}


var slideIndex = 1;

//showDivs(slideIndex);

function plusDivs(n){
	showDivs(slideIndex += n);
}

function showDivs(n){
	var i;
	var x = document.getElementsByClassName("mySlides");

	if(n > x.length){
		slideIndex = 1;
	}

	if(n < 1){
		slideIndex = x.length;
	}

	for(i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}

	x[slideIndex-1].style.display = "block";
}

function getAllParagraphs(){
	var x = document.getElementsByTagName("p");
	var allParas = "";

	for(var i = 0; i < x.length; i++){
		x[i].style.backgroundColor = "yellow";
		allParas += x[i].innerHTML + ";";
	}

	document.getElementById("allParagraphs").innerHTML = allParas;
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    //document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

function getBrowserVersionAndLanguage(){
	document.getElementById("browser").innerHTML = "BrowserVersion: " + navigator.appCodeName +
	"            BrowserLanguage: " + navigator.language;
}

function loadAjaxData(){
	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     	document.getElementById("ajaxData").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajaxData.txt", true);
  xhttp.send();
}