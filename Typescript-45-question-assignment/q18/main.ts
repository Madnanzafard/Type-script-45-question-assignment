/* Question 18: Seeing the World: Think of at least five places you’d like to visit.

Explain & TIP: Arrays can be ordered and reordered in various ways without altering the 
original list, useful for planning and organizing information.*/

let places: string[] =["Saudi Arabia", "Turkey", "Russia", "Egypt", "Paris"];
console.log(`Original Order: ${places}`);
console.log(`\n Alphabetical Order: ${[...places].sort()}`);

console.log(`\n Original Order: ${places}`);
console.log(`\n Reverse Alphabetical Order: ${[...places].sort().reverse()}`);

places.reverse();
console.log(`\n Reverse Order: ${places}`);

places.reverse();
console.log(`\n Original Order: ${places}`);

places.sort();
console.log(`\n Alphabetical Order: ${places}`);

places.reverse();
console.log(`\n Reverse Alphabetical Order: ${places}`);