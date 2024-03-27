/*Question 21: Think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.

Explain & TIP: Objects in TypeScript can store various related data about a single entity. 
Think of an object as a container for characteristics of something, like a book or a car.*/

let student: {name: String; age: number; dateOfBirth: String; education: String; hobbies: String} ={
    name: "Muhammad Adnan Zafar",
    age: 30,
    dateOfBirth: "19-06-1992",
    education: "Bachalor of Engineering",
    hobbies: "Playing video game & watching movies" 
};
console.log(`Student Name: ${student.name} 
Age: ${student.age} 
Date of Birth: ${student.dateOfBirth}
Education: ${student.education} 
Hobbies: ${student.hobbies}`);