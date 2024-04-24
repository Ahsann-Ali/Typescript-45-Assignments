"use strict";
// Assignment #12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// save friends name in a arrey
let names = ["Friend 1", "Friend 2", "Friend 3", "Friend 4", "Friend 5"];
let message = "you are invited for dinner tonight at my place";
// for loop
console.log("for loop methord:");
for (let index = 0; index < names.length; index++) {
    console.log(`Hi ${names[index]} ${message}`);
}
// for Each
console.log("for Each methord:");
names.forEach(element => {
    console.log(`Hi ${element} ${message}`);
});
// for of loop
console.log("for of loop methord");
for (const friend_name of names) {
    console.log(`Hi ${friend_name} ${message}`);
}
