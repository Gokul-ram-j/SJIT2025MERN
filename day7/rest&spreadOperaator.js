// Rest Operator Example
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Spread Operator Example - Copying and Extending Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Spread Operator Example - Merging Objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1, city: "New York" };
console.log(obj2); // Output: { name: "Alice", age: 25, city: "New York" }

// Spread Operator Example - Passing Arguments
function multiply(a, b, c) {
    return a * b * c;
}
const numbers = [2, 3, 4];
console.log(multiply(...numbers)); // Output: 24
