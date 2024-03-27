/*Question 37: Large Shirts: Default values in make_shirt().
Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases.
This introduces default function parameters.*/

function make_shirt(size:string="large",message:string="I love TypeScript"){
    console.log(`The shirt size is ${size} and the message is ${message}`)
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love programming");