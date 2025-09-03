// An Object is a variable that can hold many variables.

// Objects are collections of key-value pairs, where each key (known as property names) has a value.

const obj1 = {}; // empty object
const obj2 = {
  name: "Nikita", // name = key, value = Nikita
  class: "Btech CSE 3rd year",
  nature: "Cute and beautiful",
};

// name, class and nature are properties of object obj2
// we can access the property of a object using . and []
// If i want to print the name of obj2

console.log(obj2.name); // Nikita
console.log(obj2["nature"]); // Cute and beautiful
