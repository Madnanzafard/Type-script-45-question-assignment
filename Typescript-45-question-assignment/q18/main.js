/* Question 18: Seeing the World: Think of at least five places you’d like to visit.

Explain & TIP: Arrays can be ordered and reordered in various ways without altering the
original list, useful for planning and organizing information.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Saudi Arabia", "Turkey", "Russia", "Egypt", "Paris"];
console.log("Original Order: ".concat(places));
console.log("\n Alphabetical Order: ".concat(__spreadArray([], places, true).sort()));
console.log("\n Original Order: ".concat(places));
console.log("\n Reverse Alphabetical Order: ".concat(__spreadArray([], places, true).sort().reverse()));
places.reverse();
console.log("\n Reverse Order: ".concat(places));
places.reverse();
console.log("\n Original Order: ".concat(places));
places.sort();
console.log("\n Alphabetical Order: ".concat(places));
places.reverse();
console.log("\n Reverse Alphabetical Order: ".concat(places));
