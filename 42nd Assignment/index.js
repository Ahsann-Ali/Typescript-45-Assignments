"use strict";
// Assignment # 42
// Great Magicians: Start with a copy of your program from Exercise 41. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ["Harry Potter", "Hermione", "Dumbledor"];
function make_great(great) {
    for (let index = 0; index < great.length; index++) {
        magician[index] = "the Great " + great[index];
    }
}
function show_magicians(Magicians) {
    Magicians.forEach((element) => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
