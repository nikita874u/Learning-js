// Declare and initialization
// String can be enclosed by '' , "" and ``
let txt = new String("hello ji");
console.log(txt); // [String: 'hello ji'] string class ka ek object create karta hai

let text1 = "Hello";
console.log(text1); // Hello

let text2 = "Dear Nikita";
console.log(text2); // Dear Nikita

let text3 = `Hello From Sagar`;
console.log(text3); // Hello From Sagar

// Length of a string
console.log(text1.length); // 5

// Concatenation of string (Strings ko Jodna)

// If we want to combine the strings and assign it to a new variable
const text4 = text1 + " " + text2 + " " + text3;
console.log(text4); // Hello Dear Nikita Hello From Sagar

// If we only needs to print the combined string we can use comma (,)
// Comma ka ek nature hai ki wo agli value print karne se pehle ek space by default de deta hai
console.log(text1, text2, text3); // Hello Dear Nikita Hello From Sagar

// concat method se string apas me add ho jati hai
console.log(text1.concat(text2, text3)); // HelloDear NikitaHello From Sagar
