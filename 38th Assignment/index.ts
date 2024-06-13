// Assignment # 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. 

function describe_city(city:string,country:string):void{
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi","Pakistan")

// Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describing_city(city:string,country="Pakistan"):void{
    console.log(`${city} is in ${country}.`);
}
describing_city("Karachi");
describing_city("Lahore");
describing_city("Dubai","UAE");  