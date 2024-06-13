"use strict";
// Assignment # 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(item) {
    console.log("Your sandwich is making with:");
    item.forEach(element => console.log("-" + element));
    console.log("---Enjoy your meal---\n");
}
makeSandwich(["Chicken", "Cheese"]);
makeSandwich(["Beaf", "Garlic"]);
makeSandwich(["Ham", "Cheese"]);
