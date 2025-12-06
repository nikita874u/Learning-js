let a;
console.log(a); // undefined

let abc; // undefined
console.log(typeof abc); // undefined

const obj1 = {};
console.log(obj1.name); // undefined

// ? = value k aage lagaya jaye to ye hota hai conditional chaining

let obj2;
//console.log(obj2.name); // TypeError: Cannot read properties of undefined (reading 'name')

console.log(obj2?.name); // undefined
// Ye check krega ki obj2 exist karta hai (uski value undefined to nahi hai) ya nahi agar exist karta hai to uski value print karega agar nahi to undefined print karega.