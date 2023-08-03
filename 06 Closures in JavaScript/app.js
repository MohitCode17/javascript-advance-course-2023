// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 CLOUSERS IN JS 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 What is Clousers ?

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

// Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure ‘remembers’ the environment in which it was created.


// Example-1
function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName('Mohit', 'Gupta');
ans();

// 💯 Explanation of example in pdf file attached with lecture06


// Example-2

function hello(name) {
    var msg = "Hello";
    return function(){
        console.log(msg, name);
    }
}

var ans1 = hello('Mohit');
ans1();

// 💯 Explanation of example in pdf file attached with lecture06


/*
👉 Advantages of closures

Here are some advantages of closures:

➡️ They allow you to attach variables to an execution context.
➡️ Variables in closures can help you maintain a state that you can use later.
➡️ They provide data encapsulation.
➡️ They help remove redundant code.
➡️ They help maintain modular code.

👉 Disadvantages of closures

There are two main disadvantages of overusing closures:

👉 The variables declared inside a closure are not garbage collected.
👉 Too many closures can slow down your application. This is actually caused by duplication of code in the memory.
*/