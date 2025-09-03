// toUpperCase and toLowerCase are methods
// when we call methods we have to call them with ()
// when we call property we don't need to use ()

let str1 = "Nikita";
console.log(str1.toUpperCase()); // NIKITA
console.log(str1.toLowerCase()); // nikita

// Trim = extra space hatane ke liye (aage piche ke space)

const str2 = " Sagar"; // there space is also a character
console.log(str2 == "Sagar"); // false

console.log(str2.trim() == "Sagar"); // true

// padStart() and padEnd() method
// ye method string ke start ya end me koi value chipka dete hai
// padStart(a, b) // a batata hai ki total length kitni banani hai
// b batata hai ki kya value jodni
// same padEnd me iska ulta hota hai
const var1 = "55";
// mai chahta hu 55 se pehle 4 zero ajaye (total length banani hai = 2+4 = 6)
const var2 = var1.padStart(6, "0");
console.log(var2); // 000055

const var3 = var1.padEnd(6, "A");
console.log(var3); // 55AAAA
