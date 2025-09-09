// Conditional chaining
// This helps to manage our code and run the code without error

const obj1 = {};
let obj2; // undefined

console.log(obj1.name); // undefined
// console.log(obj2.name); // TypeError: Cannot read properties of undefined (reading 'name') because obj2 was undefined

console.log(obj2?.name); // undefined
// Pehle check hoga ki ? se pehle wali value undefined to nahi hai
// agar undefined nahi hui tabhi aage ki value check karega
