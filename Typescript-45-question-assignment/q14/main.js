/*Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.

Explain & TIP: Just like with transportation, you can use an array to manage a list of guests.
Loop through the list to send each one a personal invitation.*/
var guests = ["Haider", "Ali", "Danish"];
// Program using  For Loop
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], " \", \n As Eid approaches, I'm excited to\n                 extend an invitation to you for a joyous celebration at my home!\""));
}
// Program using Arrow Funation
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, "\", \n As Eid approaches, I'm excited to \n                extend an invitation to you for a joyous celebration at my home!\""));
});
