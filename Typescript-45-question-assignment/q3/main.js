/*Question 3: Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.

Explain & TIP: Save a name in a variable. Show it in all small letters, ALL BIG LETTERS,
and First Letter Big for each word. This helps learn how to change text style.*/
var pName = "muhammad adnan zafar";
console.log(pName.toLowerCase());
console.log(pName.toUpperCase());
console.log(pName.charAt(0).toUpperCase() + pName.slice(1, 9).toLowerCase() +
    pName.charAt(9).toUpperCase() + pName.slice(10, 15).toLowerCase() +
    pName.charAt(15).toUpperCase() + pName.slice(16).toLowerCase());
