// Array.includes() it returns boolean - checking if array contain specific value

const fruits = ["apple", "banana"];

if (fruits.includes("banana")) {
  console.log("fount it");
}

//checking directly
console.log(fruits.includes("orange")); // false

// with Numbers
const nums = [22, 34, 92];
console.log(nums.includes(34)); // true
console.log(nums.includes(50)); // false

const name = "John Doe";
console.log(name.includes("a")); //false

// let and const (Block-Scoped Variables)
// new way to declare variable in ES6+

// let - variable  that can change
// const - variable that can't change

let score = 0;
console.log(score); // 0
score = 5; // allowed
console.log(score); // 5

const username = "john@24";
console.log(username);
// username = "john123"  X Error not allowed

// both let and const are blocked-scoped meaning they only exist inside {}
