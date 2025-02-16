// ----------------------------------------fn----------------------------------------------------

// Using a for loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop:", i);
}

// Using a while loop
let j = 0;
while (j < 5) {
    console.log("While Loop:", j);
    j++;
}

// Using a do-while loop
let k = 0;
do {
    console.log("Do-While Loop:", k);
    k++;
} while (k < 5);

// Using a forEach loop (for arrays)
const arr = [10, 20, 30, 40, 50];
arr.forEach((value, index) => {
    console.log(`ForEach Loop: Index ${index}, Value ${value}`);
});

// Using a for...of loop
for (let num of arr) {
    console.log("For...of Loop:", num);
}

// Using a for...in loop (for objects)
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`For...in Loop: Key ${key}, Value ${obj[key]}`);
}




//  objects in js

// Creating an object
const person = {
    name: "Alice",
    age: 25,
    isStudent: false,
    address: {
        city: "New York",
        zip: 10001
    },
    hobbies: ["Reading", "Gaming", "Traveling"],
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

// Accessing object properties
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation
console.log(person.address.city); // Nested object access
console.log(person.hobbies[1]); // Accessing array inside object
console.log(person.greet()); // Calling object method


//  functions// 1. Regular Function (Function Declaration)
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 10)); // 15

// 3. Arrow Function (ES6)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12




