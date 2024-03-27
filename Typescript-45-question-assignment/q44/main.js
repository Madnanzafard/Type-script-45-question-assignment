/*Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments,
useful for handling lists of data like sandwich ingredients.*/
function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Make sandwich with these items:");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
make_Sandwich("Chicken", "cheese", "tomato");
make_Sandwich("Beef", "cheese");
make_Sandwich("Garlic chicken", "cheese", "mayo sauce");
