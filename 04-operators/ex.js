// Operators & Maths :
// -> An operator is a symbol that performs an operator on one or more values.
// + -> Addition orerator
// - -> subtraction operator
// * -> multiplication operator
// / -> division operator
// % -> remainder operator
// ** -> exponenantion opeator


//Operand, Unary, Binary :
// -> An operand is simply the value or variable on which the operator works.
console.log(2 + 3); //2 and 3 -> operands, + -> operators
// -> sometimes people casually call operands as arguments especially in programming discussions.


// What is an arguments?
// -> An arguments is a value that you can passed to a function so that function can work with it.
console.log("Hello"); //Hello -> arguments, console.log -> function.


// So why did say "sometimes people call these arguments" ?
// -> because in everyday programming discussions, people sometimes casually use arguments to mean the values involved.
// Correct term : 5+2 => operands, (5, 2) => arguemnts.


//What is a unary operator?
// unary = one; It works on one operand.
let x = 5;
x = -x;
console.log(x); //-5 only one value invoilved.


//what is a binary operator?
//binary - two; it works one two operands.
let y = 2;
let z = 3;
console.log(y + z); // 5 it works with two operands.


// Maths :
// The following math operations are supported.
// + -> addition,
// - -> subtraction,
// * -> Multiply,
// / -> divide,
// % -> Remainder,
// ** -> Exponentiation.


//The first four are stright forwarf, while % and ** need details.


// Remainder Operator % :
// -> Remainder % does not mean percentage. it means "give the remainder after division".
let num = 2;
console.log(num % 2); // 0 first we have to divide using normal math and we'll get this 0.
// Note : Don't read % as "percent"
// a%b = when a is divided by b, what is the remainder?


//Exponentation operator (**)
// -> THe exponentation operator a ** b raises a to the power of b.
console.log(2**2) //2 power of 2 is 4.


//String Concatenation with binary (+)
// -> Usually the plus operator + using sums numbers.
// -> but is the binary + is applied to strings, it merges (concatenates) them.
let s = "my" + "name";
console.log(s); //myname


// Note : If any of the operands is a string, then the other one is converted to a string too.
console.log('1' + 2); //12
console.log(2 + '1'); //21
// Note : If doesn't matter whether the first operand is a string or second one.
// More complex example : console.log(2 + 2 + '1'); //41
// -> Operators works one after another.
// -> The first + sums two numbers, so it returns 4 then the next + adds the string 1 to it. so it's like 41 not 221.
// -> The binary + is the only operator that supports strings in such a way. other arthemtic opertors work only with numbers and always convert their operands to numbers.


console.log(6 - '2') //4 converts '2' to a number
console.log('6' / '2'); //3, converts both operands to numbers.


//Numeric COnversion, Unary +
// -> The plus + used in two forms
// i) The binary form -> The binary form that we used above that add form.
// ii) The Unary form -> The Unary plus (+) applied to a single value. but it doesn't do anything to numbers.
// -> but if the operand is not a number, the unary plus converts it into a number.
//Example :
let a = 6;
console.log(+a); //6


let b =5;
console.log(-b); //-5


let c = -10;
console.log(-c); //10


// -> we can convert type using with unary + operator.
let apple = '2';
let mango = '4';
console.log(+apple + +mango); //6
// both values converted to numbers before the binary plus.
// another normal method:
console.log(Number(apple) + Number(mango)); //6


//Increment / Decrement :
// -> Increasing and decreasing is most common numerical operations in js.
// -> Increment ++ increases a variable by 1.
let counter = 4;
counter++ // WOrks the same as counter = counter + 1;
console.log(counter); //4


let COUNTER = 5;
COUNTER--; // works the same as COUNTER = COUNTER - 1;
console.log(COUNTER); //3


// Notes : Increment / Decrement can only be applied to variables, if you give with value like 5++ it returns error.
// -> The operators ++ and -- can be placed either before or after a variable.


// Postfix form => when the operator goes after the variable it is in "postfix form" : counter++
// Prefix form => if the operates comes before the variable that's called prefex form : ++counter


















 













