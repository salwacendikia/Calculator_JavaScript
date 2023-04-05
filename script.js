//button

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    })
})


//screen

const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number;
}


let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";


//membuat function inputNumber

const inputNumber = (number) => {
    if (currentNumber === "0") { 
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

//operator

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})


//function operator
const inputOperator = (operator) => {
    if (calculationOperator === ""){
        prevNumber = currentNumber
    }
    calculationOperator = operator;
    currentNumber = "0"
}

//equal/sama dengan
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
})


//function calculate

const calculate = () => {
    let result = ""
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ""
}


//button AC
const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = "0"
}

//button decimal

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

//function decimal
const inputDecimal = (dot) => {
    if (currentNumber.includes(".")){
        return
    }
    currentNumber += dot
}


//Percent
const percent = document.querySelector(".precentage")

percent.addEventListener("click", (event)=> {
    calculatePercentage(event.target.value)
    updateScreen(currentNumber)
})

// Function Percent
const calculatePercentage = () => {
    if (currentNumber.includes('.')) {
    return;
    }
    const percentage = (parseFloat(currentNumber) / 100).toString();
    currentNumber = percentage;
    };