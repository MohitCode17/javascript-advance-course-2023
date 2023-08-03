/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟  DATA STRUCTURE - MAP 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

👉 WHAT IS MAP ?

A map is an ordered collection of key-value pairs. Both keys and values can be any data type.

To retrieve a value, you can use the corresponding key.

Map are iterables. They can be used with a "for of" loop.
*/


// 👉 Create a new map:

const groceries = new Map([
    ["Cabage", 40],
    ["Mango", 120],
    ["Milk", 90],
])

// 👉 Iterate map

for(const [key,value] of groceries){
    // console.log(key, value);
}

// 👉 Set new key-value
groceries.set("Brown bread", 35);
groceries.set("Sugar Packet", 55);

// 👉 Get existing key-value
console.log(groceries.get("Milk")); // 90

// 👉 Get total size of map
console.log(groceries.size);

// 👉 Delete element
groceries.delete("Sugar Packet");

// 👉 Check if specific key-value exist
console.log(groceries.has("Milk")); // true

// 👉 Clear Map
groceries.clear();

console.log(groceries);