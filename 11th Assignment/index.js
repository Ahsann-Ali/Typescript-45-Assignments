"use strict";
// Assignment #11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// save friends name in a arrey
let names = ["Friend 1", "Friend 2", "Friend 3", "Friend 4", "Friend 5"];
// for loop
console.log("for loop methord:");
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
}
// for Each
console.log("for Each methord:");
names.forEach(element => {
    console.log(element);
});
// for of loop
console.log("for of loop methord");
for (const friend_name of names) {
    console.log(friend_name);
}
