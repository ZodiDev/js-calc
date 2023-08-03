
let firstNumber = "";
let secondNumber = "";
let operator = "";

let result;

let numberIndex = 1;

function numberClick(clicked_number){
    if(numberIndex == 1){
        firstNumber = clicked_number
        document.getElementById("firstNumber").innerHTML = clicked_number;
        numberIndex += 1
    }else if(numberIndex == 2 && (clicked_number == "+" || clicked_number == "-" || clicked_number == "*")){
        operator = clicked_number 
        document.getElementById("operator").innerHTML = clicked_number;
        numberIndex += 1
        operator = clicked_number
    }else if(numberIndex == 3){
        secondNumber = clicked_number 
        document.getElementById("secondNumber").innerHTML = clicked_number;
        numberIndex += 1
    }else{
        alert("Please enter a valid operator")
    }
}

function calculate(){
    if(operator == "+"){
        result = Number(firstNumber) + Number(secondNumber);
    }else if(operator == "-"){
        result = Number(firstNumber) - Number(secondNumber);
    }else if(operator == "*"){
        result = Number(firstNumber) * Number(secondNumber);
    }

    if(firstNumber == "" || secondNumber == "" || operator == ""){
        window.alert("Please enter a valid calculation");
    }else{
        window.alert("The result is: "+ result);
    }
    clear();
}

document.getElementById("clearBtn").onclick = function(){
    clear()
}

function clear(){
    numberIndex = 1;
    firstNumber = "";
    secondNumber = "";
    operator = "";
    document.getElementById("firstNumber").innerHTML = "";
    document.getElementById("secondNumber").innerHTML = "";
    document.getElementById("operator").innerHTML = "";
}