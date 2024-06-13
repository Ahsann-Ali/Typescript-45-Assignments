"use strict";
// Assignment # 41
// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ["Harry Potter", "Hermione", "Dumbledor"];
function show_magicians(Magicians) {
    Magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
