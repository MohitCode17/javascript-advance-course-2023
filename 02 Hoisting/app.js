// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 HOISTING IN JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

/*
👉 Hoisting is a concept which enables us to extract values of variables and functions even before initializing and assigning value without getting errors.

This is happening due to the first phase of memory creation phase in execution context.
*/


// Example:-

sayHello();     // Hello

console.log(myName);    // undefined

var myName = 'John';

function sayHello() {
    console.log('Hello');
}


// 💯Example explain in pdf notes attached with lecture02