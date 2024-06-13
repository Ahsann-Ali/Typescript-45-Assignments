// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let apple: string = "apple";
// Test for equility
console.log("apple is equal to apple");
console.log(apple == "apple");
// Test for inequility
console.log("apple is not equal to apple");
console.log(apple !== "apple");

// • Tests using the lower case function
// equal to
let uppercaseApple: string = "APPLE";
console.log("APPLE is equal to apple after converting to lower case");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");
// not equal to
console.log("APPLE is not equal to apple after converting to lower case");
console.log(uppercaseApple.toLocaleLowerCase() !== "apple");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
let nine :number =9
let five :number =5
// equal to
console.log("five is equal to five");
console.log(five == five);
// not equal to
console.log("nine is not equal to nine");
console.log(nine !== nine);
// greater then
console.log("nine is greater then five");
console.log(nine > five);
// less than
console.log("nine is less then five");
console.log(nine<five);
// greater then or equal to
console.log("nine is greaterthen or equal to five");
console.log(nine>=five);
// less then or equal to
console.log("nine is less then or equal to five");
console.log(nine<=five);

// • Tests using "and" and "or" operators
// and &&(true statment)
console.log("nine is not equal to five and nine is greater then five");
console.log(nine!==five&&nine>five);
// (false statment)
console.log("nine is less then five and five is equal to five");
console.log(nine<five&&five==five);

// or ||(true statment)
console.log("nine is equal to five or nine is greater then five");
console.log(nine == five || nine > five);
// false statment
console.log("nine is less then five or five is greater then nine");
console.log(nine < five || five > nine);

// • Test whether an item is in a array
let students :string[]=["farhan","noman","usman","luqman"]
console.log("farhan is include in students");
console.log(students.includes("farhan"));

// • Test whether an item is not in a array
console.log("farhan is include in students");
console.log(!students.includes("farhan"));