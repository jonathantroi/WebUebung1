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

function calc(){
	var operation = document.getElementById("op").value;
	var first = parseInt(par1);
	var second = parseInt(par2);


	switch(operation){
		case "+":
			document.getElementById("calcOutput3").innerHTML = first + second;
		break;
		case "-":
			document.getElementById("calcOutput3").innerHTML = first - second;
		break;
		case "*":
			document.getElementById("calcOutput3").innerHTML = first * second;
		break;
		case "/":
			document.getElementById("calcOutput3").innerHTML = first / second;
		break;
		default:
		break;
	}

	par1 = "";
	par2 = "";
}

function addNumber(num){
	if(document.getElementById("opBox").checked == false){
		par1 += num;
		document.getElementById("calcOutput").innerHTML = par1;					
	}else{
		par2 += num;
		document.getElementById("calcOutput2").innerHTML = par1;
	}

}

function setTrue(status){
	calcCheck = true;
}

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

showDivs(slideIndex);

function plusDivs(n){
	showDivs(slideIndex += n);
}

function showDivs(n){
	var i;
	var x = document.getElementByClassName("mySlides");

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