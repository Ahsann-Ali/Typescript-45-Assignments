"use strict";
// Assignment # 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. 
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    // The function should return a string formatted like this:"Lahore, Pakistan"   
    console.log(`${city},${country}`);
}
// Call your function with at least three city-country pairs, and print the value that’s returned.
city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("Makka", "Saudi");
