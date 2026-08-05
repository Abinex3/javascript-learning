// Loops: while and for
// We often need to repeat actions.
// For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.
// Loops are a way to repeat the same code multiple times.

// The “while” loop
// The while loop has the following syntax:

// while (condition) {
//   // code
//   // so-called "loop body"
// }
// While the condition is truthy, the code from the loop body is executed.

// For instance, the loop below outputs i while i < 3:

// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }

// If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

// Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

// For instance, a shorter way to write while (i != 0) is while (i):

// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//   alert( i );
//   i--;
// }

