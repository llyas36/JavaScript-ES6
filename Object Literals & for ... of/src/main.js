//Enhanced Object Literals... create object faster and clearner
// Shorthand Properties
// it's when we want a variable to be object property
const name = "Daniel";
const age = 25;
const user = { name, age };
console.log(user);

//Shorthand Method...
const myObj = {
  msg: "this is object",
  display() {
    console.log(this.msg);
  },
};
const { msg, myFunction } = myObj;
myObj.display();

//Dynamic Property Keys
const key = "score";
const value = 99;
const game = { [key]: value };
console.log(game);

// Shorthand Creation...
const personName = "Alex";
const personAge = 30;
const personCity = "Addis Ababa";

// to create object using object literal
const personInfo = { personName, personAge, personCity };
console.log(personInfo);

// Method Shorthand Creation..
const robot = {
  talk() {
    console.log("Beep!");
  },
};
robot.talk();

const language = "JavaScript";
const val = "awesome";
const myObject = {
  [language]: val,
};
console.log(myObject);

// for...of Looping
const myArray = [1, 2, 3, 4, 5];
//Array
for (const i of myArray) {
  console.log(i);
}

//String
const text = "this is string";
for (const word of text) {
  console.log(word);
}

//Set
const ids = new Set([1, 2, 3, 4, 5]);
for (id of ids) {
  console.log(id);
}
