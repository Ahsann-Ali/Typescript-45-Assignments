"use strict";
// // Assignment # 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ["Ali", "Hassan", "Hussain", "Admin"];
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.forEach(user => {
        if (user === "Admin") {
            console.log(`Hello ${user}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${user},thank you for loging in`);
        }
    });
}
