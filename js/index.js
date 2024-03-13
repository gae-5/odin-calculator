const displayArea = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear-button');
const calculationButton = document.querySelector('.evaluation-button');
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
    if(secondOperand === '0') {
        return "oh oh, can't devide by zero man!!";
    }
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
)});

operatorButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>displayText(btn))
});

clearButton.addEventListener('click',()=>{
    inputValue = ""
    displayArea.value=inputValue}
);

function splitter(op){
    let operator = op;
    let initialValue = displayArea.value;
    let splitVal = initialValue.split(operator);
    let firstOperand = splitVal.at(0);
    let secondOperand= splitVal.at(-1);
    let calculation = operate(firstOperand,secondOperand,operator);
    return calculation;
}

function calculation(){
    let initialValue = displayArea.value;
    let calculationValue=0;

    for (const sign in initialValue) {
        if (initialValue[sign] === '+') {
            return calculationValue = splitter('+');            
        } else if (initialValue[sign] === '-') {
            return calculationValue = splitter('-');            
        } else if (initialValue[sign] === '*') {
            return calculationValue = splitter('*');            
        } else if (initialValue[sign] === '/') {
            return calculationValue = splitter('/');            
        }
    }
}

calculationButton.addEventListener('click',()=>{
    let displayValue = calculation();
    displayArea.value = displayValue;
})