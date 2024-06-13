"use strict";
// Assignment # 29
// // Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Mango", "Orange", "Peach"];
if (favorite_fruits.includes("Mango")) {
    console.log("I really love mango");
}
if (favorite_fruits.includes("Orange")) {
    console.log("I really love Orange");
}
if (favorite_fruits.includes("Peach")) {
    console.log("I really love Peach");
}
if (favorite_fruits.includes("Apple")) {
    console.log("I really love Apple");
}
if (favorite_fruits.includes("Banana")) {
    console.log("I really love Banana");
}
