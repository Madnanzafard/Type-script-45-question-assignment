/*Question 12: Greetings: Use the array from Exercise 11.
Instead of just printing each person’s name, print a message to them.
The message should be the same for each person, but personalized with their name.

Explain & TIP: This builds on the previous exercise.
Now, you’re not just listing names, you’re using them in a sentence to make a personalized message for each friend.*/

let Names: String[]= ["Danish", "Haider", "Ali", "Sajid"];
for(let i=0; i< Names.length; i++){
console.log(`Dear ${Names[i]}, \n As Eid approaches, I'm excited to extend an invitation to you for a joyous celebration at my home!`);
}
