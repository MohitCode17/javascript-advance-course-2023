// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 HOW JAVASCRIPT IS EXECUTED 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

/*
👉 Everything in JavaScript happens inside the "Execution Context". When JS engines scan a script file, it makes an environment called execution context.

It has two phases:-
1. Memory Creation Phase (known as Variable Environment)
2. Code Execution Phase (known as Thread of Execution)

In first Phase all the variables and function register in key value pairs. JS assign "undefined" to the variables using "var" and uninitialzed to the variable using "let" and "const", for function "function defination" itself. Where as in second phase code is executed one line at a time, because  JS is "Synchronous" Single-Threaded language.
*/


// Example:-

var a = 2;

function square(num) {
    var ans = num * num;
    return ans;
};

var square2 = square(a);
var square4 = square(4);
console.log(square2, square4);

// 💯Example explain in pdf notes attached with lecture01