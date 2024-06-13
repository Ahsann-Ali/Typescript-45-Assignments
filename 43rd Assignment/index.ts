// Assignment # 43
// Unchanged Magicians: Start with your work from Exercise 42.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician: string[] = ["Harry Potter", "Hermione", "Dumbledor"];

function copy(arr: string[]) {
  return [...arr];
}

function make_great(great: string[]) {
  for (let index = 0; index < great.length; index++) {
    copyArrey[index] = "the Great " + great[index];
  }
}

function show_magicians(Magicians: string[]) {
  Magicians.forEach((element) => {
    console.log(element);
  });
}
const copyArrey = copy(magician);
make_great(copyArrey);
console.log("\n\nThis is my orignal arrey:");

show_magicians(magician);
console.log("\n\nThis is my modified arrey:");

show_magicians(copyArrey);
