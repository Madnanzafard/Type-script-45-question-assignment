/*Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”

Explain & TIP: Arrays help you group related items, like types of transportation.
This way, you can talk about each one using a loop.*/
var guests = ["Suzuki Inazuma Bike", "Hummer Car", "Landi Jeeb"];
// Program using  For Loop
for (var i = 0; i < guests.length; i++) {
    console.log("I would like to own a ".concat(guests[i], "."));
}
// Program using Arrow Funation
guests.forEach(function (favouriteTransportation) {
    console.log("I would like to own a ".concat(favouriteTransportation, "."));
});
