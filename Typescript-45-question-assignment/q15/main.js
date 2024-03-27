/*Question 15: Changing Guest List: One of your guests can't make it to the dinner,
so you need to send out a new set of invitations with a replacement guest.

Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it,
then loop through the list again for new invitations.*/
var guest = ["Haider", "Ali", "Danish"];
var unableToAttend = "Haider";
console.log("".concat(unableToAttend, " can't come for Eid Celebration"));
var newGuest = "Sajid";
guest[guest.indexOf(unableToAttend)] = newGuest;
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, "\", \n As Eid approaches, I'm excited to \n                extend an invitation to you for a joyous celebration at my home!\""));
});
