// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 LET, CONST AND TEMPORAL DEAD ZONE 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// Let considered the example below 👇

console.log(firstName); // ReferenceError: Cannot access 'firstName' before initialization
console.log(lastName); // prints undefined as expected
let firstName = 'John';
console.log(firstName); // John
var lastName = 'Doe';
console.log(window.firstName); // undefined
console.log(window.lastName); // Doe

// 👉 It looks like "let" isn't hoisted, but it is, let and const declarations are hoisted. But its different from var.

// Lets understand

// Both firstName and lastName are actually initialized as undefined in hoisting stage. But var lastName is inside the storage space of GLOBAL, and firstName is in a separate memory object called "script", where it can be accessed only after assigning some value to it first ie. one can access firstName only if it is assigned. Thus, it throws error.

// 👉 Temporal Dead Zone : Time since when the let variable was hoisted until it is initialized some value.

// So any line till before "let firstName = John" is the TDZ for firstName
// Since firstName is not accessible on global, its not accessible in window/this also.


// 👉 VARIABLE DECLARATION

// var a = 10;
// var a = 100;  // No error: we can redeclaration same name variable using var keyword

// ------------------------------------------------------------

// let a = 10;
// let a = 100; //this code is rejected upfront as SyntaxError. (duplicate declaration)

// ------------------------------------------------------------

// let a = 10;
// var a = 100; // this code also rejected upfront as SyntaxError. (can't use same name in same scope)


// ➡️ Let is a stricter version of var. Now, const is even more stricter than let.

// let a;
// a = 10;
// console.log(a) // 10. Note declaration and assigning of a is in different lines.

// ------------------------------------------------------------

// const b;
// b = 10;
// console.log(b); // SyntaxError: Missing initializer in const declaration. (This type of declaration won't work with const. const b = 10 only will work)

// ------------------------------------------------------------

// const b = 100;
// b = 1000; //this gives us TypeError: Assignment to constant variable.