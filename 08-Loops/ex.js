// let i = 0;
// while(i<5){
//     console.log(i++);
// }

// Task 1 : Print numbers from 1 to 10.
// let i = 1;
// while (i <= 10) {
//     console.log(i++);   
// }

// Task 2 : Print numbers from 10 down to 1.
// let j = 10;
// while (j >= 1) {
//     console.log(j--);
// }


// Task 3 : Print only even numbers from 2 to 20.
// let i = 1;
// while(i <= 20) {
//     if(i%2 === 0)
//     {
// console.log(i);
// }
// i++
// }

// Task 4 : Print only odd numbers from 1 to 19.
// let i = 1;
// while(i <= 20){
//     if(i % 2 === 1){
//         console.log(i);
//     }
//     i++
// }

// Task 5 : Find the sum of numbers from 1 to 10.
// let i = 1;
// let sum = 0;
// while(i <= 10){
//    sum = sum + i;
//    i++;
// }

//  console.log(sum);

//  Task 5 : Find the sum of all even numbers between 1 and 20.
//  let i = 1;
//  let sum = 0;
//  let even = 0;
//  while (i <= 20){
//    if(i % 2 === 0) {
//    even = even + i;
//    // console.log(even);
//    } 
//    sum = even
//    i++;
//  }
//      console.log(sum);

//  Task 6 : Print the multiplication table of 5.
// let i = 1;
// let table = 5
// let multi = 0;
// while (i <= 10) {
//    multi = i * 5
// console.log(i++,"*",table,"=", multi);


//    // console.log(i++);
   
// }

// Task 10

// Print numbers from 1 to 20, but:

// If divisible by 3, print "Fizz"
// Otherwise print the number.
// let i = 1;
// while(i<=20){
//    if(i % 3 ){
//       console.log(i);
//    } else {
//       console.log("Fizz");
//    }
//    i++;
// }

// Task 12 : Reverse count from 50 to 0, but print only numbers divisible by 5. 

// let i = 50;
// let reverse = 0;
// while(i >= 1){

// // reverse = i % 5 === 0;

// if(i % 5 === 0) {
// console.log(i);

// }

// // i = reverse
//    i--;
   
// }
     ///////////////////////////////////////////////////////////////////////////////////////////////
   //   DO WHILE
// Task 1 : Print numbers from 1 to 5 using a do...while loop.
// let i = 1;
// do {
//    console.log(i);
//    i++
// } while(i<=5)

//OUTPUT :
// PS D:\JavaScript - Basics\08-Loops> node ex.js
// 1
// 2
// 3
// 4
// 5

// Task 2 : Write a program where let i = 10 Use a do...while loop to print i.
// let i = 10;
// do {
//    console.log(i);
//    i++
// } while(i <= 10)
//    OUTPUT :
//    PS D:\JavaScript - Basics\08-Loops> node ex.js
// 10

//While method :
// let i = 10;
// while (i<=10){
   
//    console.log(i);
//    i++
// }
// /SyntaxError: Identifier 'i' has already been declared


///////////////////////////////////////////////
// For Loop : 

// for (i = 1; i<=10; i++){
//    console.log(i);
// }

//OUTPUT
// S D:\JavaScript - Basics\08-Loops> node ex.js
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// let i = 10;
// for(; i>=1; i--){
//    console.log(i);
// }

//OUTPUT
// PS D:\JavaScript - Basics\08-Loops> node ex.js
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

let num = 0;
for (let i = 1; i<=20; ){
num = i % 2 === 0;
   console.log(num);
   i++
}

 





 
