// 1) Number 
// -> The number represents both int and float values
let n = 234;
n = 345.43;
console.log(typeof(n)); //OUTPUT : number

// Speical Numberic Values :
// i) Infinity represents any value greater than largest possible numbers
console.log(1/0);  //OUTPUT : Infinity

//ii) -Infinity represents any value smaller than lowest possible numbers
console.log(-1/0); //OUTPUT : -Infinity

//iii) NaN (Not a Number) represents invalid or underfined numeric result.
console.log(0/0); //OUTPUT : NaN

//2) BigInt:
// A BigInt value is created by appending 'n' to the end of and interger
const bigInt = 4563456564545645645565546453455645575567687876876887676887686n;
console.log(typeof(bigInt)); //OUTPUT : BigInt
//If we don't give the 'n' at last, it will be return type as 'Number'.

//3) String :
let name = 'Abhi'; //Single quotes
name = "Abinesh";  //Double quotes
const greetings = `My name is ${name}`; // backticks
console.log(greetings);
//Double and single quotes are "Simple" quotes and there is no any differences
//Backticks are extended functionality quotes. they allow us to embed variables and expressions inside {`....`}

//4) Boolean :
let isTrue = 10 > 3;
console.log(isTrue);

// console.log(typeof(null)); // It is showing type as object, but this is an official error in typeof

