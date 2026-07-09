// Conditional branching : if, ?
// -> Sometimes, we need to perform different actions based on different conditions
// -> If we want to do that, we can use the if Statement and the conditional operator (?)

// If Statement :
// -> If statement means, if the result is true, executes a block of code.

let birthYear = "what is your birth year? is it 2003";
let year = 2003;
if(year === 2003) {
console.log("Perfect!");
}

// The "else" Clause :
// -> The If statement may contain an optional else back.
// -> It executes when the condition is falsy
let year = 2003;
if(year === 2003) {
console.log("Perfect!");
} else {
    console.log("No!"); 
}

// Several Conditions (else if):
// -> Sometimes, we will test several variants of a condition.
// -> That time, we have to use else if clause condition.

let year = 2003;
if(year < 2015) {
    console.log('Too early...');
} else if(year > 2015) {
    console.log('Too late....');
} else {
    console.log('Correct!');
}

// Boolean Conversion : 
// -> The if(..) statment evaluates the expression in brackets and converts the result to a boolean.

// Remember Boolean Rule :
// -> A number 0, an empty String "", null, undefined and NaN all become false. because of that they are called "falsy" values.
// -> Other values become true, so they are called "truthy"

// So, the under code this condition would never execute
const name = 'abhi';
//It will never return anything, because this is falsy value
if(0){
    console.log(name);
}

// But inside truthy value condition, it will work
//it will return the value, because this is truly value
if("0"){
    console.log(name);
}

// Conditional Operator '?'
// -> Sometimes, we need to assign a variable depending on an condition

// Example :
let accessAllowed;
let age = 20;
if(age > 18){
    accessAllowed = true;
} else {
    accessAllowed = false;
}

//This is called "Conditional" or "question" operator

// -> The operator is represented by a question mark (?)
// -> Sometimes it's called "ternary", because the operator has three operands/

// Syntax => let result = condition ? value1 : value2;

// If condition's truthy, the value1 is returned, otherwise value2 returned.

//Example :
let accessAllowed;
age = 21;
const success = `Yes! He can access, cuz his age ${age}`;
const unsuccess = "He has no access limit age"
accessAllowed = age > 18 ? success : unsuccess;
console.log(accessAllowed);

// Notes : We can write (age > 18) without bracket too. age > 18, but if we write with bracket, it can be easy to read a code.


// --------------------------------------------------------------------


// Tasks :

//1 ) Will alert be shown?
// if ("0") {
//   alert( 'Hello' );
// }

// 2) Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// const question = prompt("What's the “official” name of JavaScript?");
// if(question === "ECMAScript") {
//     alert("Right!");
// } else {
//     alert("You don't know? “ECMAScript”!")
// }

// 3) Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.


// const value = prompt("Enter your Number", '0');
// if(value > 0){
// alert("1")
// } else if (value < 0) {
//     alert("-1")
// } else {
//     alert(0)
// }

// 4) Rewrite this if using the conditional operator '?':
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }


// const a = prompt("Enter First Number");
// const b = prompt("Enter Second Number");
// const tot = a + b;
// const result = (tot > 4) ? "Above" : "Below";
// alert(result)

