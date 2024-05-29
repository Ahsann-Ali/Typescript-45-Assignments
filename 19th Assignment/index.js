"use strict";
// // // Assignment #19
// // Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// // Assignment #14
// // Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_name = ["Aamir", "Shahrukh", "Salman"];
// let greeting: string="Hello";
// let message: string="I would like to invite you for dinner at my place";
// // For each methord
// guest_name.forEach(guest => {
//     console.log(greeting+ " "+guest+" "+message)
// });
let guestCount = guest_name.length;
console.log(`I am inviting ${guestCount} guests for dinner.`);
