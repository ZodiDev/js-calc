
let number = document.getElementsByClassName("number");
let firstNumber = "";
let secondNumber = "";
let operator = "";

let result;

let numberIndex = 1;

caculation = false;

onclick = function(){
    for (let i = 0; i < number.length; i++ ){
        document.getElementById(String(number[i].innerHTML)).onclick = function(){
            if(numberIndex == 1){
                firstNumber = String(number[i].innerHTML);
                if(firstNumber > 0 && firstNumber <= 9){
                    numberIndex += 1;
                    document.getElementById("firstNumber").innerHTML = firstNumber;
                }else{
                    window.alert("Please enter a valid number");
                }
            }else if(numberIndex == 2){
                operator = String(number[i].innerHTML);
                if(operator == "+" || operator == "-" || operator == "*"){
                    document.getElementById("operator").innerHTML = operator;
                    numberIndex += 1;
                }else{
                    window.alert("Please enter a valid operator");
                }
            }else if(numberIndex == 3){
                secondNumber = String(number[i].innerHTML);
                if(secondNumber > 0 && secondNumber <= 9){
                    numberIndex += 1;
                    document.getElementById("secondNumber").innerHTML = secondNumber;
                }else{
                    window.alert("Please enter a valid number");
                }
            }
        }
    }
}

document.getElementById("submitBtn").onclick = function(){
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

        