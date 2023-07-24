// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 BLOCK AND SHADOWING IN JS 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 What is Block ?

// Block also called as compound statement is used to group JS statements together in one group. We use {...} to create a block.

{
    var x = 12;
    let y = 22;
    const z = 32;
    // let and const are hoisted in block scope,
    // whereas var is hoisted in global scope

    console.log(x); // 12
    console.log(y); // 22
    console.log(z); // 32
}

// console.log(x);
// console.log(y); // ReferenceError: y is not defined. (Can be access inside only block)
// console.log(z); // ReferenceError: z is not defined. (Can be access inside only block)


// * Reason?
//  * In the BLOCK SCOPE; we get y and z inside it initialized as *undefined* as a part of hoisting (in a seperate memory space called **block**)
//  * While, x is stored inside a GLOBAL scope.
//  * Thus we say, *let* and *const* are BLOCK SCOPED. They are stored in a separate memory space which is reserved for this block. Also, they can't be accessed outside this block. But var a can be accessed anywhere as it is in global scope. Thus, we can't access them outside the Block.



// 👉 What is Shadowing?
var x = 100;
{
 var x = 10; // same name as global var
 let y = 20;
 const z = 30;
 console.log(x); // 10
 console.log(y); // 20
 console.log(z); // 30
}
console.log(x); // 10, instead of the 100 we were expecting. So block "x" modified value of global "x" as well. In console, only y and z are in block space. x initially is in global space(x = 100), and when x = 10 line is run, x is not created in block space, but replaces 100 with 10 in global space itself.
// So, If one has same named variable outside the block, the variable inside the block shadows the outside variable.
// This happens only for var


// Let's observe the behaviour in case of let and const and understand it's reason.
let b = 100;
{
 var a = 10;
 let b = 20;
 const c = 30;
 console.log(b); // 20
}
console.log(b); // 100, Both b's are in separate spaces (one in Block(20) and one in Script(another arbitrary memory space)(100)). Same is also true for *const* declarations.



// 👉 What is Illegal Shadowing?

let a = 20;
{
 var a = 20;
}
// Uncaught SyntaxError: Identifier 'a' has already been declared

// We cannot shadow let with var. But it is valid to shadow a let using a let. However, we can shadow var with let.
// All scope rules that work in function are same in arrow functions too.