// Ternary operator (?)
// We can also use OR operator for this
let str1;

let str2 = str1 ? str1 : "Second value";
console.log("Str2: ", str2); // Second value

let str3 = str1 || "Second value";
console.log("Str3: ", str3); // Second value
// Note: If first value is undefined or null then second value is taken
// Because undefined or null are falsy values

const cond1 = false;

const res1 = cond1 ? cond1 : true; // false || true => true
const res2 = cond1 || true;
console.log("Result 1: ", res1); // true * exceptional case due falsy value
console.log("Result 2: ", res2); // true

// Note: Agar falsy value hogi to hamesha second argument aayega

// Null cohesion operator (??)

// This operator checks if first value is valid then it choose first otherwise second

let str4 = false;
const str5 = str1 ?? false;
console.log("Result5: ", str5); // false
