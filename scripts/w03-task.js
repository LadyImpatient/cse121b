/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (num1, num2) {
    return num1+num2;
}
function addNumber(){
    const num1 = parsefloat(document.getElemetByID('#add1').value);
    const num2 = parsefloat(document.querySelector('#add2').value);
    const sum = add(num1,num2);
    document.getElementById('sum').value = sum;
}

const theElement = document.getElementById('addNumbers');
theElement.addEventListener('click', addNumber);

/* Function Expression - Subtract Numbers */

/* Arrow Function - Multiply Numbers */

/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
