// sprea operator(...) used to unpack elements of an array and objects

// Spread Operator with Array
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1,2,3,4]

// add extra item

var numbers = [2, 3];
const full = [1, ...numbers, 4];
console.log(full); // [1,2,3,4]

// copy of array
const fruits = ["apple", "orange"];
const copyFruits = [...fruits];
console.log(copyFruits);

// Spread Operator with Objects

const person = {
  name: "John Doe",
  age: 35,
};

const fullPersonInfo = { ...person, country: "US" };
console.log(fullPersonInfo);

const letters = ["B", "C"];
const updated = ["A", ...letters];
console.log(updated);

//Rest Operator(...)

// rest operator is used to collect the remaining values into an array or objects
// we can use it in three place in 1. function 2. array 3. object

//function

function myFunc(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
result = myFunc(1, 2, 3);
console.log(result);

// in array

var numbers = [1, 2, 3, 4];

const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);

// in object

const car = {
  name: "BMW",
  year: 2021,
  color: "blue",
};
const { name, ...restInfo } = car;
console.log(name);
console.log(restInfo);
