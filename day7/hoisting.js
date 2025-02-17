// Hoisting with var
console.log(name); // undefined (hoisted but not initialized)
var name = "John";
console.log(name); // "John"

// Hoisting with let and const
try {
  console.log(age); // ReferenceError
} catch (error) {
  console.log(error.message);
}
let age = 25;

try {
  console.log(country); // ReferenceError
} catch (error) {
  console.log(error.message);
}
const country = "USA";

// Hoisting with function declaration
greet(); // "Hello, world!"
function greet() {
  console.log("Hello, world!");
}

// Hoisting with function expression using var
try {
  sayHello(); // TypeError: sayHello is not a function
} catch (error) {
  console.log(error.message);
}
var sayHello = function () {
  console.log("Hello!");
};

// Hoisting with function expression using let
try {
  greetExpression(); // ReferenceError
} catch (error) {
  console.log(error.message);
}
let greetExpression = function () {
  console.log("Hi!");
};
