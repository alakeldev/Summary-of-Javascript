/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     // code block
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     // code block
//     return a + b;

// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);


// Single Line Arrow Function With Parameters
// const addTwoNumbers = (a, b) => (a + b); also valid
const addTwoNumbers = (a, b) => a + b;
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Implicit Returns  / below it has only one parameter no need ()
const saySomething = message => console.log(message);

saySomething("Hello alakel");


// if you don't have paramters at all
const sayHello = () => console.log("Hello Alakel");
sayHello();

// Returning Multiple Lines of code example below

const returnMultipleLines = () => (
    `<p>
        This is a Multiline string!
    </p>`
)
console.log(returnMultipleLines());