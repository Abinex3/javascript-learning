// Task 1 : Create a function called calculateSquare.

// It should:

// Accept one number as a parameter.
// Calculate the square of that number.
// Return the result.
// Call the function with 5.
// Print the returned result using console.log().
// function calculateSquare(num) {
//     let result = num;
//     result *= num;
//     return result
// }

// console.log(calculateSquare(5));

// OUTPUT :
// PS D:\JavaScript - Basics\10-functions> node ex.js
// 25

// -----------------------------------------------------------------------------------------------
// Task 2 — Two Parameters + Return

// Create a function called calculateRectangleArea.

// The function should:

// Accept two parameters:
// length
// width
// Calculate the area using:
// length × width
// Return the calculated area.
// Call the function with:
// length = 10
// width = 5
// Print the result.

// function calculateRectangleArea(length, width){
//     return length * width
// }

// console.log(calculateRectangleArea(10, 5));
// OUTPUT :
// PS D:\JavaScript - Basics\10-functions> node ex.js
// 50
// -----------------------------------------------------------------------------------------------

// Task 3 — Function + if...else

// Create a function called checkEvenOdd.

// The function should:

// Accept one number.
// Check whether the number is even or odd.
// Return "Even" if it's even.
// Return "Odd" if it's odd.
// Test the function with 7.

// function checkEvenOdd(num) {
//     if (num % 2 === 0){
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

// console.log(checkEvenOdd(7));
// OUTPUT :
// PS D:\JavaScript - Basics\10-functions> node ex.js
// Odd

// -----------------------------------------------------------------------------------------------

// Task 4 — Function + Multiple Conditions

// Now let's make it slightly harder.

// Create a function called checkNumber.

// It should accept one number and return:

// "Positive" → if the number is greater than 0
// "Negative" → if the number is less than 0
// "Zero" → if the number is exactly 0

// function checkNumber(num) {
//     if(num > 0) {
//         return "Positive"
//     } else if (num < 0 ) {
//         return "Negative"
//     } else {
//         return "Zero"
//     }
// }

// console.log(checkNumber(-10));
// OUTPUT :
// PS D:\JavaScript - Basics\10-functions> node ex.js 
// Negative

// -----------------------------------------------------------------------------------------------
// Task 5 — Function + Calculation + Condition

// Create a function called calculateGrade.

// The function should accept a student's mark and return a grade according to these rules:

// function calculateGrade (mark) {
//     if(mark >= 90) {
//         return "A"
//     } else if (mark >= 80) {
//         return "B"
//     } else if (mark >= 70) {
//         return "C";
//     } else if (mark >= 60) {
//         return "D"
//     } else {
//         return "F"
//     }
// }

// console.log(calculateGrade(85));
// // OUTPUT:
// // PS D:\JavaScript - Basics\10-functions> node ex.js
// // B

// -----------------------------------------------------------------------------------------------

// Task 6 — Function + Loop

// Now we're going to combine functions + loops.

// Create a function called printNumbers.

// It should:

// Accept one parameter called limit.
// Use a for loop inside the function.
// Print numbers from 1 up to the given limit.
// Call the function with 5.

// function printNumbers (limit) {
//     for(let i = 1; i <= limit; i++ ) {
//         console.log(i);
        
//     }
// }

// console.log(printNumbers(5));
// // PS D:\JavaScript - Basics\10-functions> node ex.js
// // 1
// // 2
// // 3
// // 4
// // 5

// -----------------------------------------------------------------------------------------------

// Task 7 — Function + Loop + Condition

// Now let's increase the difficulty.

// Create a function called printEvenNumbers.

// It should:

// Accept a parameter called limit.
// Use a for loop.
// Print only the even numbers from 1 up to limit.
// Call it with 10.

// function printEvenNumbers(limit) {
//     for(let i=1; i<=limit; i++) {
//         if(i % 2 === 0){
//             console.log(i);
//         }
            
//     }
// }

// printEvenNumbers(10);
// // OUTPUT : 
// // PS D:\JavaScript - Basics\10-functions> node ex.js
// // 2
// // 4
// // 6
// // 8
// // 10

// -----------------------------------------------------------------------------------------------

// Task 8 — Function + Loop + Return

// Now we're going to introduce an important difference:

// Instead of printing the result, your function must calculate and return it.

// Create a function called sumNumbers.

// It should:

// Accept a parameter called limit.
// Use a for loop.
// Add all numbers from 1 to limit.
// Return the final sum.
// Call it with 5.
// Print the returned value.

// function sumNumbers(limit){
//     let num = 0;
//     for(let i = 1; i <= limit; i++){
//         num = num + i;
//     }

//     return num;
// }

// console.log(sumNumbers(5));

// OUTPUT :
// PS D:\JavaScript - Basics\10-functions> node ex.js
// 15

// -----------------------------------------------------------------------------------------------

// Task 9 — Function + Loop + Condition + Return

// Now let's combine everything you've learned so far.

// Create a function called sumEvenNumbers.

// It should:

// Accept a parameter called limit.
// Loop from 1 to limit.
// Find only the even numbers.
// Add all those even numbers together.
// Return the final sum.
// Test it with 10.

// function sumEvenNumbers(limit){
//     let sum = 0;
//     for(let i = 1; i <= limit; i++){
//         if(i%2 === 0){
//             sum = sum + i;
//         }
//     }

//     return sum;
// }

// console.log(sumEvenNumbers(10));
// // OUTPUT : 
// // PS D:\JavaScript - Basics\10-functions> node ex.js
// // 30

// -----------------------------------------------------------------------------------------------

// Task 10 — Count Instead of Sum

// Now I want you to think slightly differently.

// Create a function called countEvenNumbers.

// It should:

// Accept limit as a parameter.
// Loop from 1 to limit.
// Check whether each number is even.
// Count how many even numbers exist.
// Return the count.
// Test it with 10.

// function countEvenNumbers(limit){
//     let count = 0;
//     for(let i = 1; i<=limit; i++){
//         if(i%2 === 0){
//             count++ ; 
//         }
//     }

//     return count;
// }

// console.log(countEvenNumbers(10));
// // OUTPUT :
// // PS D:\JavaScript - Basics\10-functions> node ex.js
// // 5

// -----------------------------------------------------------------------------------------------

// Task 11 — Find the Largest Number

// Now we're moving into problem-solving territory. This one is more challenging than the previous tasks.

// Create a function called findLargest.

// It should:

// Accept three numbers as parameters.
// Find which number is the largest.
// Return the largest number.
// Do not use Math.max().
// Use if / else if / else.

// function findLargest (num1, num2, num3){
//     if(num1 > num2) {
//         return num1;
//     } else if (num2 > num3) {
//         return num2;
//     } else if(num3 > num1){
//         return num3;
//     }
// }

// function findLargest (num1, num2, num3){
//     if((num1 >= num2) && (num1 >= num3)  ) {
//         return num1;
//     } else if ((num2 >= num3) && (num2 >= num1)) {
//         return num2;
//     } else if((num3 >= num1) && num3 >= num2){
//         return num3;
//     }
// }

// console.log(findLargest(20, 50, 30));

// OUTPUT :
// PS D:\JavaScript - Basics\10-functions> node ex.js
// 50

// -----------------------------------------------------------------------------------------------

// Task 12 — Reverse a Number

// Now we're going to combine function + loop + mathematical logic.

// Create a function called reverseNumber.

// It should:

// Accept a positive integer.
// Reverse the digits.
// Return the reversed number.
// Do not convert the number to a string.
// Do not use built-in reverse methods.

function reverseNumber(nums){
    if(nums <= 0){
        return `Numbers (${nums}) should be positive.`
    }

    let reverse = 0;
    let rem = 0;

    while(nums >0) {
        reverse *= 10;
        rem = nums % 10;
        nums = (nums - rem) /10;

        reverse += nums;

    }

    return reverse;
}

console.log(reverseNumber(12345));
// OUTPUT :
// S D:\JavaScript - Basics\10-functions> node ex.js
// 12464210
