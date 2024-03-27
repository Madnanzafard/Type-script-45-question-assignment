/*Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
Explain & TIP: Experiment with different types of conditions to see how they work. 
This builds a deeper understanding of logic in programming.*/

//Equality with string
console.log("Testing equality with string");
let fruit: string = "apple";
console.log(fruit== fruit );
console.log(fruit== "Apple");

//Using the lower and upper case function
console.log("Testing equality with lower and upper case function");
console.log(fruit.toLowerCase() == "apple");
console.log(fruit.toUpperCase() == "APPLE");
console.log(fruit.toLowerCase() == "Apple");

//Numerical tests
console.log("Testing numerical tests");
let num1: number = 20;
let num2: number = 40;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//Testing using "AND", "OR" and "NOT" operator.
console.log("Testing using AND, OR and NOT operator");
console.log(num1 > num2 && num1 > 10);
console.log(num1 > num2 || num1 > 10);
console.log(!(num1 > num2));

//Test whether an item is in array.
console.log("Testing whether an item is in array");
let fruits= ["apple", "banana", "orange"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple"));

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); 


