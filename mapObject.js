// Map is an object with unique key-value pair

// Create an empty Map
const myMap = new Map();

// Add key-value pairs
myMap.set("name", "Sagar");
myMap.set("age", 25);
myMap.set("role", "Developer");

console.log("My Map: ", myMap); // My Map:  Map(3) { 'name' => 'Sagar', 'age' => 25, 'role' => 'Developer' }

// Getting values of an Map
console.log(myMap.get("name")); // "Sagar"
console.log(myMap.get("age")); // 25

// To check existance of a property in Map
console.log(myMap.has("role")); // true
console.log(myMap.has("city")); // false

// To delete a property
myMap.delete("age");
console.log(myMap); // Map(2) { 'name' => 'Sagar', 'role' => 'Developer' }

// If we want to print all key-value pair of our Map

myMap.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});
