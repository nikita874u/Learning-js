// character position in a string
// indexing starts from 0

let str1 = "Hellooo nikita";
console.log(str1.charAt(5)); // o

console.log(str1.at(3)); // l

// If we wants to break the string
// slice, substring, substr are methods used to break string
// slice(start index, end index) end index is not included
console.log(str1.slice(8, 14)); // nikita
console.log(str1.substring(8, 14)); // nikita

// slice and substring works same, but only difference is slice accpets both +ive and -ive index but substring not (substring doesnot accepts negative indexes)

console.log(str1.slice(1, -2)); // ellooo niki
console.log(str1.substring(2, -5)); // He
// Note: agar hum negative index dete hai substring me to wo first index value se aage ka sara udaa deta hai
// substr method same slice ki tarah hota hai ye negative index bhi le leta hai bs diff itna hai ki jo isme dusra parameter hai wo batata hai ki string ko kitni length tak kaatna hai
// text.substr(a,b)
console.log(str1.substr(2, 5));
