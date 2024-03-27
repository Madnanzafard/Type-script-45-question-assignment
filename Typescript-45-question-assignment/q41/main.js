/*Question 41: Magicians: Display magician names from an array.
Explain & TIP: Passing arrays to functions allows for the manipulation or
display of their contents in a centralized manner.
This is useful for handling lists of data.*/
var magicians = ["Magician 1", "Magician 2", "Magician 3"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
