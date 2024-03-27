/*Question 37: Large Shirts: Default values in make_shirt().
Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases.
This introduces default function parameters.*/
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and the message is ").concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love programming");
