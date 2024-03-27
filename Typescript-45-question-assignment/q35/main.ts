/*Question 35: Animals: Highlight animals with a common trait.
Explain & TIP: Looping through an array of animals allows you to comment on each one individually. 
This teaches you how to personalize messages within a loop based on array items.*/

let animals: string[] = ["dog", "cat", "bird"];
for(let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
};
console.log("Any of these animals would make a great pet!");