
let firstNumber = "";
let secondNumber = "";
let operator = "";

numbers = document.querySelectorAll(".number");

let result;

let numberIndex = 1;

numbers.forEach(number => number.addEventListener("click", () =>{
    if (numberIndex == 1){
        firstNumber = number.textContent;
        document.getElementById("firstNumber").textContent = number.textContent;
        numberIndex += 1
    }else if(numberIndex == 2 && (number.textContent == "+" || number.textContent == "-" || number.textContent == "*")){
        operator = number.textContent
        document.getElementById("operator").innerHTML = number.textContent;
        numberIndex += 1
        operator =number.textContent
    }else if(numberIndex == 3){
        secondNumber = number.textContent 
        document.getElementById("secondNumber").innerHTML = number.textContent;
        numberIndex += 1
    }else{
        alert("Please enter a valid operator")
    }
}))

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