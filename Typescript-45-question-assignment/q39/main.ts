/*Question 39: City Names: Formatting city-country pairs.
Explain & TIP: Returning formatted strings from functions can simplify data presentation. 
This exercise practices string formatting and returning values from functions.*/

function city_country(city: String, country: string) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Makkah", "saudi Arbia"));
console.log(city_country("Kabul", "Afganistan"));