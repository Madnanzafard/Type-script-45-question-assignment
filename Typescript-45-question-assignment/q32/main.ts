/*hecking Usernames: Ensure uniqueness in usernames.
Explain & TIP: Checking for uniqueness is crucial in user management. 
Use loops and conditionals to handle case-insensitive comparisons.*/

let current_users: string[] = ["adnan", "ali", "danish", "liaquat", "haider"];
let new_users: string[] = ["Adnan", "jamshaid", "Danish", "naveed", "sajid"];
new_users.forEach(newUser => {
    if (current_users.includes(newUser.toLowerCase())){
        console.log(`Sorry, the username ${newUser} is already taken. Please enter a new username.`);
    }else{
        console.log(`Congratulations, the username ${newUser} is available.`);
    }
});




