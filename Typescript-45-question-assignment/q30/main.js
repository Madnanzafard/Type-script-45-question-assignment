/*Question 30: Hello Admin: Greet users differently, especially 'admin'.
Explain & TIP: Loop through usernames to personalize greetings.
This introduces looping and conditional logic together.*/
var usernames = ["Admin", "Adnan", "Ali", "Danish", "Liaquat"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
