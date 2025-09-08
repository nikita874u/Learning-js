const obj1 = {};
console.log(typeof obj1);
// object
const arr1 = ["sagar", "nikita"];
console.log(typeof arr1);
// object

// To confirm that the value is an array we use Array.isArray() method
// It is an method of Array class
console.log(Array.isArray(obj1));
// false

console.log(Array.isArray(arr1));
// true

// If we want to convert an array into string
const array1 = ["mango", "apple", "banana"];
const str1 = array1.toString(); // mango,apple,banana
// toString() method se hum array ko string bana sakte hai

// Note: In other languages like java, C, C++ we have to print the values of an array using loop but in JS we can access the array using its name (means console.log(array ka name)) (direct access);

// In other languages the datatype of elements in an array is of same type jaise agar string hai to saare string honge.

// int[] a = {2,4,5,6};
// Js me array ke andar mix type (different type) ke elements ho sakte hai.
const array2 = ["sagar", 1, true];
