function printName(){
	var input = document.getElementById("input");
	if(input.checkValidity() == true){
		document.getElementById("para").innerHTML = "Welcome " + document.getElementById("input").value;
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

function colorLoop(){
	var checked = document.getElementById("yesBox").checked;
	if(checked == true){
		var bC=document.getElementById("radioButtonForm");
		bC.style.backgroundColor = "transparent"
		setTimeout(change(1),1000);
		setTimeout(change(2),2000);
		setTimeout(change(3),3000);
	}else{
		var bC = document.getElementById("backgroundChanger");
		bC.style.backgroundColor = "transparent";
	}
}

function change(colorChanger){
	var bC = document.getElementById("backgroundChanger");
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


var param = false;
var par1 = "";
var par2 = "";
var calculation = "";

function calc(){
	var operation = document.getElementById("op").value;
	var first = parseInt(par1);
	var second = parseInt(par2);


	switch(operation){
		case "+":
			document.getElementById("calcOutput").innerHTML = first + second;
		break;
		case "-":
			document.getElementById("calcOutput").innerHTML = first - second;
		break;
		case "*":
			document.getElementById("calcOutput").innerHTML = first * second;
		break;
		case "/":
			document.getElementById("calcOutput").innerHTML = first / second;
		break;
		default:
		break;
	}

	par1 = "";
	par2 = "";

	document.getElementById("calcOutput").innerHTML = Math.floor(eval(calculation));
	calculation = "";
}

function addNumber(num){
	calculation += num;
	if(document.getElementById("opBox").checked == false){
		par1 += num;
		document.getElementById("calcOutput").innerHTML = par1;

	}else{
		par2 += num;
		document.getElementById("calcOutput").innerHTML = par1;
	}

}

function setTrue(status){
	calcCheck = true;
}
//Math.floor(eval(zahl))
function evaluateCalc(){
	var first = parseInt(document.getElementById("firstNum").value);
	var second = parseInt(document.getElementById("secondNum").value);
	var operation = document.getElementById("operator").value;

	switch(operation){
		case "+":
			document.getElementById("ausgabe").innerHTML = first + second;
		break;
		case "-":
			document.getElementById("ausgabe").innerHTML = first - second;
		break;
		case "*":
			document.getElementById("ausgabe").innerHTML = first * second;
		break;
		case "/":
			document.getElementById("ausgabe").innerHTML = first / second;
		break;
		default:
		break;
	}
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

	for(var i = 0; i < x.length; i++){
		x[i].style.backgroundColor = "yellow";
	}
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
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