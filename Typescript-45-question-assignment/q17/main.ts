/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, 
and you can only invite two guests.

Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. 
Removing guests from your list is straightforward but should be done thoughtfully.*/


let guests: string[] =["hadier","ali","danish","awais", "akbar"];
console.log("Bad News!, we got smaller table.");
guests.pop();
//console.log(guests);
guests.shift()
//console.log(guests);
guests.splice(guests.length/2,1)
//console.log(guests);

guests.forEach(guests=>{
    console.log(`Dear ${guests}, would you like to join me on dinner tonight.`)
})