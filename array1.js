// Jiska size fix wo primitive warna non-primitive
// Jo object na ho wo non-primitive
let str1 = "Hello Nikki";
let num1 = 1000;

const obj1 = {};
obj1.name = "Sagar";
console.log(obj1); // { name: "Sagar" }

// We can create like this using literal
const cars = []; // non-primitive
cars[0] = "Sagar";
cars[1] = "Nikita";
console.log(cars); // ["Sagar", "Nikita"]

cars.push("Game"); // ["Sagar", "Nikita", "Game"]

// Second way to make array using Array Class

const cars = new Array("Tata", "Volvo");

// Typeof Array is Object

// If we want to know that it actually an array then we use method
// Array.isArray(array pass);

console.log(Array.isArray(cars)); // true
