"use strict";
// Assignment #3 
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// storing a person name in a veriable
let person_name = "Ahsan ali";
// print a person name in lowerCase
console.log("Lower Case:", person_name.toLowerCase());
// print a person name in upperCase
console.log("Upper Case:", person_name.toUpperCase());
// print a person name in titleCase
console.log("Title Case:", person_name.charAt(0).toUpperCase() + person_name.slice(1, 6).toLowerCase() + person_name.charAt(6).toUpperCase() + person_name.slice(7).toLowerCase());
