let resultNumber1 = document.getElementById("result-numbers-1");
let resultNumber2 = document.getElementById("result-numbers-2");
let resultNumber3 = document.getElementById("result-numbers-3");

let indexNumber = 0;
let currentOperator = "";
let leftSide = "";
let rightSide = "";

operators = ["+", "-", "*"]

document.body.addEventListener("click", function(e){
    while(e.target.classList.contains("numbers") && !(e.target.id == "remove-input") && !(e.target.id == "result")){
        if(e.target.innerHTML == "+" && currentOperator.length < 1 && !leftSide == ""){
            currentOperator += "+"
        }

        if(e.target.innerHTML == "-" && currentOperator.length < 1 && !leftSide == ""){
            currentOperator += "-"
        }

        if(e.target.innerHTML == "*" && currentOperator.length < 1 && !leftSide == ""){
            currentOperator += "*"
        }

        if(currentOperator.length > 0){
            rightSide += e.target.innerHTML;
        }else{
            leftSide += e.target.innerHTML;
        }

        for(operator of operators){
            leftSide = leftSide.replace(operator, "");
            rightSide = rightSide.replace(operator, "");
        }

        resultNumber1.innerHTML = String(leftSide + currentOperator + rightSide);


        adjustFontSize(resultNumber1)
        resultNumber1.style.visibility = "visible";
        break;  
        }
    })

document.getElementById("remove-input").addEventListener("click", removeInput)

function removeInput(){
    resultNumber1.innerHTML = "";
    resultNumber1.style.visibility = "visible";
    currentOperator = "";
    leftSide = "";
    rightSide = "";
}

document.getElementById("result").addEventListener("click", calculation)


function calculation(){
    if(currentOperator == "+"){
        result = Number(resultNumber1.innerHTML.split("+")[0]) + Number(resultNumber1.innerHTML.split("+")[1])
        resultNumber1.innerHTML = result;
    }else if(currentOperator == "-"){
        result = Number(resultNumber1.innerHTML.split("-")[0]) - Number(resultNumber1.innerHTML.split("-")[1])
        resultNumber1.innerHTML = result;
    }else if(currentOperator == "*"){
        result = Number(resultNumber1.innerHTML.split("*")[0]) * Number(resultNumber1.innerHTML.split("*")[1])
        resultNumber1.innerHTML = result;
    }

    leftSide = "";
    rightSide = "";
    currentOperator = "";

    adjustFontSize(resultNumber1);
}

function adjustFontSize(element) {
    let contentLength = element.innerHTML.length;

    if(contentLength <= 6) {
        element.style.fontSize = "6rem";
    }else if (contentLength > 6 && contentLength <= 9) {
        element.style.fontSize = "4rem";
    }else if (contentLength > 9 && contentLength <= 12) {
        element.style.fontSize = "3rem";
    }else {
        element.style.fontSize = "2rem";
    }
}

