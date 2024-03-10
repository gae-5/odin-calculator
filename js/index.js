const displayArea = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
let firstOperand = 0;
let secondOperand = 0;
let operator = '';


/*
 * Basic Math operators on a calculator.
 */
function add(firstOperand,secondOperand){
    return Number(firstOperand)+Number(secondOperand);
}

function subtract(firstOperand, secondOperand){
    return Number(firstOperand) - Number(secondOperand);
}

function multiply(firstOperand, secondOperand){
    return Number(firstOperand) * Number(secondOperand);
}

function divide(firstOperand, secondOperand){
    return Number(firstOperand)/Number(secondOperand)
}


function operate(firstOperand, secondOperand, operator){
    let result = 0;

    if(operator === '+'){
       return result = add(firstOperand,secondOperand);
    } else 
    if( operator === '-'){
        return result = subtract(firstOperand, secondOperand);
    } else 
    if (operator === '*'){
        return result = multiply(firstOperand, secondOperand);
    } else 
    if( operator === '/'){
        return result = divide(firstOperand, secondOperand);
    }
    return result;
}


let inputValue="";
function displayText(inputs){
    inputValue += inputs.innerText;
    displayArea.value= inputValue;

}

numberButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>displayText(btn)
)})

operatorButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>displayText(btn))
})