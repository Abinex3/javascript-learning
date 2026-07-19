// Logical Operators :
//-> There are four logical operator in javaScript.
// i) OR (||)
// ii) AND (&&)
// iii) NOT (!)
// iv) Nullish Coalescing (??)

// -> Although they are called "logical", they can be applied to values of any type, not only boolean. Their result can also be of any type.

// OR (||)
// -> The "OR" operators is represented with two vertical line symbols
// result = a || b;
// -> In classical programming, the logical OR is meant to manipulate bolean values only. If any of its arguments are true, it returns true, it
// otherwise it returns false.

// There are four possible logical combinations :
alert(true || true) //true
alert(false || true) //true
alert(true || false) //true
alert(false || false) //false

// -> The result is always true expect for the case when both operands are false

// -> If an operand is not boolean; it's converted to a boolean
if(1 || 0) { // Works like if(true || false)
    console.log("truly");
}

// -> The number 1 is treated as true, the number 0 as false.

// Most of the time, OR || is used in an if statement to tesrt if any of the given condition is true.
let hour = 9;
if(hour < 10 || hour > 18) {
    console.log("Office is closed");
}

// We can pass more condition also

let hour = 12;
let isWeekend = true;
if(hour < 10 || hour > 18 || isWeekend){
    console.log("Office is closed");
}

// OR "||" finds the first truthy value :
result = value1 || value2 || value3;

// i) If checks operands from left to right.
// ii) for each operand, converts it to boolean. If the result is true, stops and returnsthe original value of that operand.
// iii) If all operands have been evaulated and if all operand were false, then it reapets the last operand.

// Simple Definition : A chain of OR || returns the first truthy value or the last one if no truthy values is found.

alert(1 || 0); // 1 (1 is truthy)
alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 ||1); // 1 (the first truthy value)
alert(undefined || null || 0); // 0 (all falsy. returns the last value)

// 1) Getting the first truthy value from a list of variables or expressions:
// -> we have firstName, lastName and nickName variables
let firstName = "";
let lastName = "";
let nickName = "abi";
console.log(firstName || lastName || nickName || "abinesh"); //abi
//if all vairables were falsy, then it returned "abinesh".

// AND (&&)
// -> The AND Opertor is represented with two amperstands &&
result = a&&b;

//Rule => AND returns true if both operands are truly and otherwise it returns false.

alert(true && true) //true
alert(false && true) //false
alert(true && false) //false
alert(false && false) //false

//Example with if :
let time = 12; 
let minutes = 30;
if(time === 12 && minutes === 30) {
console.log("The time is 12:30");
}

// Below case is false, because both operand falsy
if(1&&0){
    console.log("Won't work, because the result is falsy");
}

// AND "&&" finds the first falsy value :
result = value1 && value2 && value3; 
// 1) it checks operads from left to right
// 2) For each operand, converts it to a bololean, if the result is false, converts it to a boolean. If the result is false, stop and returns the original value of that operand.
// 3) If all operands were truthy, it returns last operand.

// Simple Definition => AND returns the first falsy value, or the last value if there is no falsy values found.

//If the first operand is truthy, AND returns the second operands.
alert(1 && 0); //0
alert(1 && 5); //5

// If the first operands is falsy. AND returns it, the second operand is ignored.

alert(null && 5); //null
alert (0 && "no matter what"); //0 

// We can also pass several values in a row.
alert (1 && 2 && null && 3) //null

// wen all values are truthy the last value is returned.
alert(1 && 2 && 3); //3 the last one.

// NOT(!)
// -> The boolean NOT operator is represented with an exclamation sign !
result = !value;

// The operator accepts a singlt argument.
// 1) it converts the operands to boolean type : true/false
// 2) Returns the inverse value (opposite value)

//Example :
alert(!true); //false
alert(!0); //true