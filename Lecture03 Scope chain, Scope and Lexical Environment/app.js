// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 THE SCOPE CHAIN, SCOPE & LEXICAL ENVIRONMENT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟


/*
👉 Scope refers to the area where an item(such as a function or variable) is visible and assesible to others. In JavaScript scope is directly related to lexical environment.
*/

// Let considered the example below 👇

// function sayHello() {
//     console.log(myName); // Instead of printing "undefined" it prints "Mohit". Some how function sayHello() could access the variable myName outside the function scope.
// }

// var myName = "Mohit";
// sayHello();



// Let considered the example below 👇

// function sayHello() {
//     greet();
//     function greet() {
//         console.log(myName); // Prints "Mohit"
//     }
// }

// var myName = "Mohit";
// sayHello();



// Let considered the example below 👇

// function sayHello() {
//     greet();
//     function greet() {
//         var myName = "Rohan";
//         console.log(myName); // Prints "Rohan"
//     }
// }

// var myName = "Mohit";
// sayHello();



// Let considered the example below 👇

// function sayHello() {
//     var myName = "Rohan";
//     greet();
//     function greet() {
//         console.log(myName); // Prints "Rohan"
//     }
// }

// sayHello();
// console.log(myName);     // Error, Not Defined



// 👉 Let's try to understand the output in each of the cases above.
// In case 1: function sayHello is able to access variable myName from Global scope.
// In case 2: "Mohit" is printed. It means that within nested function too, the global scope variable can be accessed.
// In case 3: "Rohan" is printed that means local variable of the same name took precedence over a global variable.
// In case 4: A function can access a global variable, but the global execution context can't access any local
// variable



// 👉 To summarize the above points in terms of execution context:- 

// 💯 Example explain in pdf notes attached with lecture03

// 👉 Summary of execution context:-

// call_stack = [GEC, sayHello(), greet()]

// Now lets also assign the memory sections of each execution context in call_stack.
// greet() = [lexical environment pointer pointing to sayHello()]
// sayHello() = [myName:"Mohit", greet:{}, [lexical environment pointer pointing to GEC]]
// GEC = [sayHello:{},[lexical_environment pointer pointing to null]]




// ➡️ So, Lexical Environment = local memory + lexical environment of its parent. Hence, Lexical Environement is the local memory along with the lexical environment of its parent.

// ➡️ Lexical means: In hierarchy, In order

// ➡️ Whenever an Execution Context is created, a Lexical environment is also created and is referenced in the local Execution Context(in memory space).

// ➡️ The process of going one by one to parent and checking for values is called "scope chain" or "Lexcial environment chain".


function sayHello() {
    function greet() {
        // logic here
    }
    greet(); // greet is lexically inside sayHello
}


// 💯 Final Conclusion "Thumb Rule":  An inner function can access variables which are in outer functions even if inner function is nested deep. In any other case, a function can't access variables not in its scope.