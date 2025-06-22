// Classes (The Blueprint of Objects)

class User {
  constructor(name) {
    this.name = name;
  }
}

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    return `${this.name} makes sound of ${this.sound}`;
  }
}
const dog = new Animal("Buffy", "wuff wuff");
const result = dog.makeSound();
console.log(result);

const cat = new Animal("Cetty", "meow meow");
const result2 = cat.makeSound();
console.log(result2);

// Inheritance...

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks a lot.`);
  }
}
const newDog = new Dog("buchi", "boo boo");
result3 = newDog.makeSound();
console.log(result3);
newDog.bark();

//Trailing Commas

const colors = [
  "red",
  "black",
  "white", // <- Trailing
];

// why do they exist
// make adding/removing line easier
// prevent syntax errors
