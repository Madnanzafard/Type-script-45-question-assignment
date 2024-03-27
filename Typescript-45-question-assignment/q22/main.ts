/*Question 22: Intentional Error: Try to produce an array index error in one of your programs.
Correct the error before finishing.

Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. 
Experimenting with this helps you understand array boundaries.*/

let games: String[]= ["Football", "Cricket", "Hockey"];
console.log(games[3]); /*International Error because array numbering start with 0,1,2,
                         so if you want to call hockey its number is 2 not 3*/
console.log(games[2]);





