// 🌟🌟🌟🌟🌟🌟🌟 CALL BY VALUE, CALL BY REFERENCE & SHALLOW COPY, DEEP COPY  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 What is call by value and call by reference?

// Pass by Value: When you pass a variable by value, a copy of the variable's value is created and passed to the function. Any changes made to the parameter inside the function do not affect the original variable outside the function.

// Here's an example:

// let a = 5;
// let b = a;

// b++;
// console.log(b)
// console.log(a)


// Here's an example:

// function incrementValue(value) {
//   value++; // Increment the copy of 'value'
//   console.log(value); // Output: 6
// }

// let number = 5;
// incrementValue(number);
// console.log(number); // Output: 5 (original value is unchanged)




// Pass by Reference: When you pass a variable by reference, the reference to the variable is passed to the function. This means that changes made to the parameter inside the function affect the original variable outside the function.

// Here's an example

// let obj = {name: 'John'};

// let person = obj;
// console.log(person);

// person.name = 'James';
// console.log(person);
// console.log(obj);


// Here's an example:

// let person = {
//   name: 'John',
//   age: 25,
// };

// function increaseAge(obj) {
//   obj.age += 1;
// }

// increaseAge(person);

// console.log(person);





// 👉 Shallow Copy v/s Deep Copy

// Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.


let obj = {name: 'John'};

// let person = Object.assign({}, obj);
let person = {...obj};

person.name = 'James';
console.log(person);
console.log(obj);


// A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

let employee = {
  name: 'Mohit Gupta',
  salary: 55000,
  address: {
    city: 'Delhi',
    country: 'India',
  },
  phone: 9898989898
};

let user = JSON.parse(JSON.stringify(employee));
user.address.city = 'Mumbai'

console.log(employee);
console.log(user);