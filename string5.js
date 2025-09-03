// split() method = kisi string ko todke ek array me convert kar deta hai
// bracket me condition deni padti hai ki kis basis par todna hai

const str1 = "A,B,C,D,E";
// comma ke basis par todna hai

const arr1 = str1.split(","); // (",") ye bata raha hai ki comma ke basis par todna hai
console.log(arr1); // [ 'A', 'B', 'C', 'D', 'E' ]

const str2 = "Sagar And Nikita are learning JS";
const arr2 = str2.split(" "); // (" ") ye bata raha hai ki space ke basis par todna hai
console.log(arr2); // [ 'Sagar', 'And', 'Nikita', 'are', 'learning', 'JS' ]

const str3 = `Hello\nNikita`;
console.log(str3);
// Hello
// Nikita

const str4 = str3.split("\n");
console.log(str4); // [ 'Hello', 'Nikita' ]

// includes() method check karta hai ki koi word kisi string me present hai ya nahi
console.log(str2.includes("And")); // true
console.log(str2.includes("and")); // false

const str5 = `"Sagar and nikita" are nikita ke liye sirf 'best friends'`;
console.log(str5);
