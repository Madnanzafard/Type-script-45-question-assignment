/*Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

Explain & TIP: When you have more space, you can add more guests to your list. 
You can add guests at the beginning, middle, and end of an array.*/

let guests: string[] =["hadier","ali","danish"];
console.log("Good news! we got bigger venue for party")
//console.log(guests);
guests.push("sajid","muneer");
//console.log(guests);
guests.unshift("awais");
//console.log(guests);
guests.splice(guests.length / 2,0,"adnan");
//console.log(guests);

guests.forEach(guests=>{
    console.log(`Dear ${guests}, would you like to join in Eid Party`)
})

