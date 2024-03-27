/*Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
Explain & TIP: Expanding on the previous exercise, if-else chains allow you to handle multiple conditions.*/
//Version that runs the if block:
var alien1_color = "green";
if (alien1_color == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
//Version that runs the else block:
alien1_color = "yellow";
if (alien1_color == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
