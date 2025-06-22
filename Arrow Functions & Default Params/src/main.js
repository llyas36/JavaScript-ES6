//Arrow Functions
//Arrow functions are a shorter way to write functions in JavaScript.

// with no parameter
const display = () => console.log("Hello JavaScript");
display();

// with parameter
const greet = (name) => console.log(`Hello, ${name}`);
greet("Daniel");

// with multiple parameter.

const sum = (a, b) => {
  return a + b;
};
console.log(sum(2, 3));

// Default Parameters
// it let you set a default value for a function’s parameter in case the caller doesn’t provide it.
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greetUser(); // Hello, Guest
greetUser("Daniel"); // Hello, Daniel

//Multiple Parameters with Default Value
function createUser(name = "Anonymous", age = 18) {
  return { name, age };
}

console.log(createUser()); // { name: 'Anonymous', age: 18 }
