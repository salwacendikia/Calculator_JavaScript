//SCREEN------------------------------------------------------------------------

//(memanggil element yang ada pada class calculator-screen)
const calculatorScreen = document.querySelector(".calculator-screen");

//(merubah angka yang ditampilkan dengan mengganti nilai atribut value pada tag input)
const updateScreen = (number) => {
    calculatorScreen.value = number;
};


//BUTTON NUMBER------------------------------------------------------------------------

//(memanggil element yang ada pada class number)
const numbers = document.querySelectorAll(".number");

//(mengambil setiap element array numbers)
numbers.forEach((number) => {
    //(menentukan aksi pada saat tombol number diklik)
    number.addEventListener("click", (e) => {
        inputNumber(e.target.value); 
        updateScreen(currentNumber);
    })
})


//INPUT NUMBER------------------------------------------------------------------------

//(membuat variabel currentNumber/number saat ini)
let currentNumber = "0";

//(menentukan nilai currentNumber berdasarkan argumen pada function inputNumber)
const inputNumber = (number) => {
    //(pengkondisian if else untuk menentukan nilai currentNumber)
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};


//BUTTON OPERATOR------------------------------------------------------------------------

//(memanggil element yang ada pada class operator)
const operators = document.querySelectorAll(".operator");

//(mengambil setiap element array operators)
operators.forEach((operator) => {
    //(menentukan aksi pada saat tombol operator diklik)
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value)
    })
})


//FUNCTION INPUT OPERATOR------------------------------------------------------------------------

//(membuat variabel prevNumber/number sebelumnya)
let prevNumber = "";

//(membuat variabel calculationOperator/operator yang digunakan untuk kalkulasi)
let calculationOperator = "";

//(membuat fungsi inputOperator)
const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "0";
};


//BUTTON EQUAL SIGN------------------------------------------------------------------------

//(memanggil elemen yang ada pada class equal-sign)
const equalSign = document.querySelector(".equal-sign");

//(menentukan aksi pada saat tombol sama dengan diklik)
equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
})


//FUNCTION CALCULATE------------------------------------------------------------------------

const calculate = () => {
    //(membuat variabel result yang berisi nilai hasil kalkulasi/operasi)
    let result = ""
    //(pengkondisian switch case untuk menentukan nilai hasil kalkulasi)
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


//BUTTON AC------------------------------------------------------------------------

//(memanggil elemen yang ada pada class all-clear)
const clearButton = document.querySelector(".all-clear");

//(menentukan aksi pada saat tombol AC diklik)
clearButton.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
})


//FUNCTION ALL CLEAR------------------------------------------------------------------------

const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";
}


//BUTTON DECIMAL------------------------------------------------------------------------

//(memanggil elemen yang ada pada class decimal)
const decimal = document.querySelector(".decimal");

//(menentukan aksi pada saat tombol decimal diklik)
decimal.addEventListener("click", (e) => {
    inputDecimal(e.target.value);
    updateScreen(currentNumber)
})


//FUNCTION DECIMAL------------------------------------------------------------------------
const inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return;
    }
    currentNumber += dot
}


//BUTTON & FUNCTION PRECENTAGE------------------------------------------------------------------------

//(memanggil elemen yang ada pada class precentage)
const precentage = document.querySelector(".precentage");

//(menentukan aksi/fungsi pada saat tombol persen diklik)
precentage.addEventListener("click", () => {
    currentNumber = currentNumber / 100;
    updateScreen(currentNumber);
})