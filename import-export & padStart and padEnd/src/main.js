// before es6 we used require() to import and modules or libraries
// with es6 we can simply import and export modules

// two ways to import
//
// 1. Named Import...
import { PI } from "./utils.js";

console.log(PI);

// 2. Default Import
import sayHello from "./utils.js";
sayHello();

// Renaming Import
import { addition as add } from "./utils.js";
add(2, 3);

// String.padStart() and String.padEnd()

const num = "7";
const padded = num.padStart(4, "#00");
console.log(padded);

const test = "b";
const testpadd = test.padEnd(3, "o");
console.log(testpadd);
