/*Question 25: Alien Colors #1: Imagine an alien was just shot down in a game.
Assign 'green', 'yellow', or 'red' to a variable called alien_color.

Explain & TIP: Use an if statement to check the alien's color. This introduces you to simple conditionals.*/
//Version that passes
var alien_color = "green";
if (alien_color == "green") {
    console.log("The player just earned 5 points");
}
//Version that fails(no output)
alien_color = "red";
if (alien_color == "green") {
    // no output because condition is false
}
