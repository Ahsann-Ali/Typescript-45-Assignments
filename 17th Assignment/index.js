"use strict";
// Assignment# 17
// // // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// // • Print a message to each of the two people still on your list, letting them know they’re still invited.
// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
let guestList = [
    "Ali",
    "Aamir",
    "Hassan",
    "Salman",
    "Ahsan",
    "Hussain",
];
// Print massege
console.log("Sorry new dinner table won’t arrive so can invite only two people for dinner.");
// Removeguest from list
while (guestList.length > 2) {
    let removedGuestList = guestList.pop();
    // print massege to removed guests
    if (removedGuestList !== undefined) {
        console.log(`Sorry ${removedGuestList} I can invite only two people for dinner.`);
    }
}
// printing massage to guest who still invited
guestList.forEach(guests => {
    console.log(`hi ${guests} you are still invited for dinner`);
});
// make guuestlist empty
guestList.splice(0, guestList.length);
// print updated empty list
console.log("update empty guestlist:" + "", guestList);
