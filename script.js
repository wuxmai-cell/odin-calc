const screen = document.querySelector("#screen");
const numbers = document.querySelector("#numbers");
const operators = document.querySelector("#operations");

var firstNum = document.querySelector("#firstNum");
var operator = document.querySelector("#operator");
var secondNum = document.querySelector("#secondNum");

numbers.addEventListener("click",function(e){
    let target = e.target;

    if(target.id == "clear"){
        firstNum.textContent = "";
        secondNum.textContent = "";
        operator.textContent = "";
        exp = false;
    }else if(target.id != "numbers" ){
        if(operator.textContent === ""){
            firstNum.textContent += target.id;
        }else{
            secondNum.textContent +=target.id;
        }
        
    }

    

});

operators.addEventListener("click", function(e){
    let target = e.target;
    let result = 0;

    if(target.id == "="){
        result = operate(operator.textContent,firstNum.textContent, secondNum.textContent);
        firstNum.textContent = result;
        operator.textContent = "";
        secondNum.textContent = "";
        return;
    }

    operator.textContent = target.id;

    if (target.id === "operations") return;

    if(secondNum.textContent != ""&& operator.textContent !== "" && secondNum.textContent !== ""){
 
        result = operate(operator.textContent,firstNum.textContent, secondNum.textContent);
        firstNum.textContent = result;
        operator.textContent = target.id;
        secondNum.textContent = "";
    
        if (target.textContent !== "=") {
            operator.textContent = target.textContent;
        }
    }
});

function operate(op,a,b){
    a = Number(a);
    b = Number(b);
    switch(op){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "X":
            return a*b;
        case "/":
            if (b === 0) return "Error";
            var num = a/b
            return num.toFixed(3);
    }

}

