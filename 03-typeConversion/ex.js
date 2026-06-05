//Type Conversion :

// -> Type conversion means convert a value from one data type to another data type.
//Example :
let age = "23";
console.log(typeof(age)); //String

age = Number(age);
console.log(typeof(age)); //Number

// 1) String Conversion :
// -> We can use the String function to conver a value to be a string.
//Example :
let value = 29;
console.log(typeof(value)); //Number

const todayDate = String(value);
console.log(typeof(todayDate)); //String.
//Notes : A false becomes "false", null becomes "null"

//2) Numberic Conversion :
// -> Numeric Conversion in mathematical functions and expressions happens automatically
// -> for example, when division / is applid to non-numbers : console.log("6" / "2"); //3 string are converted to numbers.
// console.log("4" / "2"); //2
// console.log("1" + "2"); //12 + has two jobs normal add and string add
// console.log("12" - "1"); //11
// console.log("5" * "5"); //25

// -> we can use the Number function to explicity convert a value to number.
let num = "123";
console.log(typeof(num)); //String
num = Number(num);
console.log(typeof(num)); //Number

// -> Explicit conversion is usually required when we read a value from a string based source like a text form, but expect a number to be entered.
// -> If the string is not a valid number, the result will be NaN.

// Numeric Conversion Rules :
//Undefined -> NaN
//null -> 0
//true or false -> 1 or 0
//String -> Whitespaces from the strart to end are removed. If the remaining string is empty the result 0. if there text then it returns NaN.

console.log(Number("     123   ")); //123
console.log(Number("123n")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0







