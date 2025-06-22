//with async/await

async function getData() {
  try {
    const res = await fetch("url");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

//Basic Async Function
async function sayHi() {
  return "Hello!";
}

sayHi().then((msg) => console.log(msg)); // Hello!

//Using await for Promises
async function getUser() {
  const response = await fetch("https://api.example.com/user");
  const data = await response.json();
  console.log(data);
}

//Handling Errors with try...catch
async function fetchUser() {
  try {
    const res = await fetch("wrong-url");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong!", error);
  }
}

// Sets
// A Set is a special kind of object in JavaScript that stores unique values.

//Creating a Set
const ids = new Set();
ids.add(101);
ids.add(102);
ids.add(101); // duplicate — ignored

console.log(ids); // Set(2) {101, 102}

//Checking If a Value Exists
console.log(ids.has(101)); // true
console.log(ids.has(999)); // false

//Removing Items
ids.delete(101);
console.log(ids); // Set(1) {102}

//Looping through a Set
for (const id of ids) {
  console.log(id);
}
