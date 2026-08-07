// let a = 2+2;

// switch(a) {
//     case 2 :
//         console.log("Too Small");
//         break;
    
//     case 4 : 
//     console.log("Exactly!");
//     break;

//     case 6 :
//         console.log("Too big!!!");
        
//     default :
//     console.log("I don't know exact value");
//     break
// }

// let day = 4;
// switch (day) {
//     case 1 :
//         console.log("Monday");
//         break;
//     case 2 :
//         console.log("Tuesday");
//         break;
//     case 3 :
//         console.log("Wednesday");
//         break;
//     case 4 :
//         console.log("Thursday");
//         break;
//     case 5 :
//         console.log("Friday");
//         break;
//     case 6 :
//         console.log("Saturday");
//         break;
//     case 7 :
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Number");
//         break 
// }

// OUTPUT :
// PS D:\JavaScript - Basics\09-SwitchStatement> node ex.js
// Thursday


// let month = 8;
// switch (month) {
//     case 1 :
//         console.log("January");
//         break;
//     case 2 :
//         console.log("February");
//         break;
//     case 3 :
//         console.log("March");
//         break;
//     case 4 :
//         console.log("April");
//         break;
//     case 5 :
//         console.log("May");
//         break;
//     case 6 :
//         console.log("June");
//         break;
//     case 7 :
//         console.log("July");
//         break;
//         case 8 :
//         console.log("August");
//         break;
//         case 9 :
//         console.log("September");
//         break;
//         case 10 :
//         console.log("October");
//         break;
//         case 11 :
//         console.log("November");
//         break;
//         case 12 :
//         console.log("December");
//         break;

//     default:
//         console.log("Invalid Month");
//         break 
// }

// // OUTPUT :
// // PS D:\JavaScript - Basics\09-SwitchStatement> node ex.js
// // August

// let grade = "B";
// switch (grade) {
//     case "A" :
//         console.log("Excellent");
//         break;
//     case "B" :
//         console.log("Very Good");
//         break;
//     case "C" :
//         console.log("Good");
//         break;
//     case "D" :
//         console.log("Pass");
//         break;
//     case "F" :
//         console.log("Fail");
//         break;
//     default:
//         console.log("Invalid grade");
//         break 
// }

// // OUTPUT :
// // PS D:\JavaScript - Basics\09-SwitchStatement> node ex.js
// // Very Good

let num1 = 20;
let num2 = 4;
let operator = "/";
let total = 0;
switch (operator) {
    case "+" :
        total = num1 + num2;
        console.log(total);
        break;
    case "-" :
        total = num1 - num2;
        console.log(total);
        break;
    case "*" :
        total = num1 * num2;
        console.log(total);
        break;
    case "/" :
        total = num1 / num2;
        console.log(total);
        break;
    case "%" :
        total = num1 % num2;
        console.log(total);
        break;
    default:
        console.log("Invalid operator");
        break 
}

// OUTPUT :
// PS D:\JavaScript - Basics\09-SwitchStatement> node ex.js
// 5