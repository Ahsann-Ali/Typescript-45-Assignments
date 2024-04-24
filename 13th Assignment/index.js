"use strict";
// Assingment #13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_transportation = ["Honda Motorcycle 70cc", "Suzuki Mehran", "Yamaha rx100"];
let statment = "I would like to own";
// for loop
console.log("FOR LOOP METHORD:");
for (let index = 0; index < favorite_transportation.length; index++) {
    console.log(statment + " " + favorite_transportation[index]);
}
// for Each
console.log("FOR EACH METHORD:");
favorite_transportation.forEach(peradise => {
    console.log(statment + " " + peradise);
});
// for of loop
console.log("FOR OF LOOP METHORD:");
for (const my_peradise of favorite_transportation) {
    console.log(statment + " " + my_peradise);
}
