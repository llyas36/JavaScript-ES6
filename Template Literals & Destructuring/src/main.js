// template litral
const name = "Lily";
console.log(`Hello im ${name}`);

// Exptression Insertion
const a = 5;
const b = 15;
console.log(`The sum:  ${a + b}`);

// Multi-line String

const message = `
  Hello
  This is me
  Writing in multi-line string`;
console.log(message);

//Destructuring...
// Object Destructuring
// Array Destructuring

const person = {
  fullName: "John Doe",
  age: 36,
  country: "United Kingdom",
};

// we can simply extract values using object destructuring

const { fullName, country } = person;
console.log(`Name: ${name}`);
console.log(`Country: ${country}`);

// renaming
const { fullName: personName, country: personCountry } = person;
console.log(`Full Name: ${personName}`);
console.log(`Person Country: ${personCountry}`);

//Array Destructuring...
const colors = ["red", "black", "aqua", "blue"];
const [first, , third] = colors;
// we can skip elements in array
console.log(first);
console.log(third);
