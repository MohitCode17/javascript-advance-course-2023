// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 CURRYING IN JS 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 What is Currying ?

// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c) into callable as f(a)(b)(c).

// Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining closures by immediately returning their inner functions simultaneously.


// 👉 Why Is Currying in JavaScript Useful?

// Currying helps you avoid passing the same variable again and again.
// It helps to create a higher order function.
// It divides one function into multiple functions so that one handles one set of responsibility.


// Example-1 f(a,b) implementation

// function f(a,b){
//     return 'This is not currying';
// };

// console.log(f());


// function f(a) {
//     return function(b){
//         return 'This is currying function';
//     }
// }
// console.log(f()());


// Example-2 Convert sum(2,6,1) to sum(2)(6)(1)

// function sum(a, b, c) {
//     return a + b + c;
// }

// console.log(sum(2, 6, 1));


// function sum(a) {
//     return function(b) {
//         return function(c) {
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(2)(6)(1));



// Example-3 Evaluate(operation)(2)(4) ⇒ 2 + 4 = 6 on basis of input given to first param.

// function evaluate(operation){
//     return function(a) {
//         return function(b) {
//             if(operation === "sum") {
//                 return a + b;
//             }else if(operation === "subtract") {
//                 return a - b;
//             }else if(operation === "divide") {
//                 return a / b;
//             }else if(operation === "multiply") {
//                 return a * b;
//             }
//         }
//     }
// }

// const sum = evaluate('sum');
// const subtract = evaluate('subtract');
// const divide = evaluate('divide');
// const multiply = evaluate('multiply');
// console.log(sum(2)(4));
// console.log(subtract(2)(4));
// console.log(divide(2)(4));
// console.log(multiply(2)(4));



// Example-4 Write a currying function that takes infinite arguments

// const sum = function(a) {
//     return function(b) {
//         if (b) {
//             return sum(a + b);
//         } else {
//             return a;
//         }
//     }
// }

// console.log(sum(2)(1)(3)(1)(2)());



// 👉 Currying vs Partial application

// Normally how do we write a curried function 👇🏼
// function sum(a) {
//     return (b, c) => {
//         return a * b * c
//     }
// }

// Let's see the partial application of the same function sum 👇🏼
function sum(a) {
    return (b, c) => {
        return a * b * c
    }
}

console.log(sum(2)(3, 1))