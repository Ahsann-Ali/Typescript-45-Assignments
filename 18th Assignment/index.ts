// Assignment#18
// Store the locations in a array. Make sure the array is not in alphabetical order.
let favouratePlace: string[] =["USA","England","China","Saudi","Finland"];
// Print your array in its original order.
console.log("Orignal Order :",favouratePlace);
//  Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order :",favouratePlace.slice().sort());
// Show that your array is still in its original order by printing it.
console.log("Orignal Order after sorting :",favouratePlace);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order :",favouratePlace.slice().sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Orignal Order after Reverce sorting :",favouratePlace);
// Reverse the order of your list. Print the array to show that its order has changed.
favouratePlace.reverse()
console.log("Reverce Order after modifing :",favouratePlace);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
favouratePlace.reverse()
console.log("Orignal Order after revercing order after modifing :",favouratePlace);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favouratePlace.sort()
console.log("Alphabatical order after modifing :",favouratePlace);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favouratePlace.sort().reverse()
console.log("Reverce alphabatical order after modifing :",favouratePlace);

