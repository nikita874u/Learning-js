// Value insertion in a string
let x = 5;
let y = 10;
console.log(`The sum of ${x} and ${y} is ${x + y}`); // The sum of 5 and 10 is 15

const str = "Nikita";
console.log(`Hello!! ${str}`);

// Difference between == and ===
// == compares only value
// During == comparison if one of a value is string, then JS convert another value into string and then convert them
// === compares datatype as well as values

let var1 = 3; // "3"  (during comparison with string, JS internally convert it into a string)
let var2 = "3";
let var3 = true; // "true" (during comparison with string, JS internally convert it into a string)
let var4 = "true";
console.log(var1 == var2); // value is compared Ans. True
console.log(var1 === var2); // datatype and value both are checked Ans. False
console.log(var3 == var4); // Ans.True
console.log(var3 === var4); // Ans. False
