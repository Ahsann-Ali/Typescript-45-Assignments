"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // Assignment # 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animal = ["Cat", "Dog", "Horse"];
for (let petAnimal of animal) {
    console.log(petAnimal);
}
animal.forEach(petAnimal => {
    console.log(`The ${petAnimal} is a good pet`);
});
console.log("All of these animals would become a good pet");
