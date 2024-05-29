"use strict";
// Assignment #16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestlist = ["Aamir", "Salman", "Ahsan"];
console.log("Great news! we found a bigger table so now more space is avilable");
// add a new guest in the beginning of arry by using unshift()
guestlist.unshift("Ali");
//Add one new guest to the middle of your array.
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Hassan");
// Use append() to add one new guest to the end of your list.
guestlist.push("Hussain");
// Print a new set of invitation messages, one for each person in your list.
guestlist.forEach(guest => { console.log(`Dear ${guest} you are invited for dinner.`); });
