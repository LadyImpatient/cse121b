/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
const add = (num1, num2) => num1 + num2;

function addNumber() {
    const num1 = parseFloat(document.getElementById('add1').value);
    const num2 = parseFloat(document.getElementById('add2').value);
    const sum = add(num1, num2);
    document.getElementById('sum').value = sum;
}

const addElement = document.getElementById('addNumbers');
addElement.addEventListener('click', addNumber);

/* Function Expression - Subtract Numbers */
const subtract = function(num1, num2) {
    return num1 - num2;
}

function subtractNumbers() {
    const num1 = parseFloat(document.getElementById('subtract1').value);
    const num2 = parseFloat(document.getElementById('subtract2').value);
    const difference = subtract(num1, num2);
    document.getElementById('difference').value = difference;
}

const subtractElement = document.getElementById('subtractNumbers');
subtractElement.addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById('factor1').value);
    const num2 = parseFloat(document.getElementById('factor2').value);
    const product = multiply(num1, num2);
    document.getElementById('product').value = product;
}

const multiplyElement = document.getElementById('multiplyNumbers');
multiplyElement.addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(num1, num2) {
    return num1 / num2;
}

function divideNumbers() {
    const num1 = parseFloat(document.getElementById('dividend').value);
    const num2 = parseFloat(document.getElementById('divisor').value);
    const quotient = divide(num1, num2);
    document.getElementById('quotient').value = quotient;
}

const divideElement = document.getElementById('divideNumbers');
divideElement.addEventListener('click', divideNumbers);

/* Selection Structures - Get Total Due */
document.getElementById('getTotal').addEventListener('click', () => {
    let subtotal = Number(document.getElementById('subtotal').value);
    let membershipCheckbox = document.getElementById('member').checked;
    let discount = membershipCheckbox ? 0.2 : 0;
    let total = subtotal * (1 - discount);
    document.getElementById('total').innerText = `Total Due: $${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = Array.from({ length: 13 }, (_, i) => i + 1);

document.getElementById('array').innerText = numbersArray;

/* Output Odds Only Array */
document.getElementById('odds').innerText = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.getElementById('evens').innerText = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerText = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').innerText = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
