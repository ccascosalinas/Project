var number1 = "";
var operate ;
var number2 = ""; 


var insert= function(event){
var x =  event.target.value;
var monitor = document.getElementById("ShowCalculate").innerText;
  
if( (parseFloat(x) >=  "0" || x == ".") && !operate ){
    if(number1.includes(".") && x == "." ){ 
        number1 = number1 ;
    } else {
        number1 = number1 + x
    }
    document.getElementById("ShowCalculate").innerText = number1;

} 
 if ( operate &&( parseFloat(x) >= "0" || x == ".")){
     if (number2.includes(".") && x == ".") {
       number2 = number2;
     } else {
       number2 = number2 + x;
     }
    document.getElementById("ShowCalculate").innerText =  number2;
}

if(!parseFloat(x) &&  x != "0" && !number2 && x != "."){
    operate = x;
   document.getElementById("ShowCalculate").innerText = number1 + operate;
}

console.log("number1",  number1)
console.log("number2", number2)
console.log("operate",  operate)
};

var show = function(){
if(number1 && number2 && operate){
    
    document.getElementById("ShowCalculate").innerText = calculate() ;
if(calculate() && operate =="/" && number2 == "0"){
    alert("Error")
}
}
if(calculate()){
    number1 = calculate();
    number2 = "";
    operate = "";
}
};

var clean = function(
){  
    number1 = ""
    number2 = ""
    operate = ""
    document.getElementById("ShowCalculate").innerText = ""; 
}

 function add(){
    return (parseFloat(number1) + parseFloat(number2)).toFixed(2);
} 

function subtract(){
    return (parseFloat(number1) - parseFloat (number2)).toFixed(2)
}

function multiply(){
    return (parseFloat(number1) * parseFloat(number2)).toFixed(2)
}

function divide(){
    return (parseFloat(number1) /parseFloat(number2)).toFixed(2) 
}

var calculate = function(){
    switch(operate){
    case "+":
    return add();

    case "-" :
        return subtract();

        case "x" :
            return multiply();

            case "/" :
            return divide();
    }
}
