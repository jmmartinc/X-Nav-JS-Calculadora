var number = "";
var result = 0;
var finished = false;

function zero(){
    if (finished)
        number = "";
	number = number + "0";
	document.getElementById("display").innerHTML = number;
    finished = false;
}

function one(){
    if (finished)
        number = "";
	number = number + "1";
	document.getElementById("display").innerHTML = number;
    finished = false;
}

function plus(){
    result = result + parseInt(number, 2);
	document.getElementById("display").innerHTML = "+";
	finished = true;
}

function calculate(){
	result = result + parseInt(number, 2);
	document.getElementById("display").innerHTML = result.toString(2);
    number = result.toString(2);
    result = 0;
    finished = true;
}

