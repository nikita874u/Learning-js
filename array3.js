// To find the length of an array
// using in-build property .length
const arr1 = ["A", "B", "C", "D"];
// console.log(arr1.length);

// without using in-build property
function findLength(array) {
  let counter = 0;
  array.forEach(() => {
    counter++;
  });
  console.log("length of array:", counter);
}

// function call
findLength(arr1);

// Array me numberred indexing hoti hai
console.log(arr1[1]); // 4
// Object me named indexing hoti hai
const obj = {
  student: "Nikita",
};
console.log(obj["student"]); // Nikita

// Note: Kaafi programming languages me array me named index bhi hote hai unhe hum associated arrays (hash map) kehte hai.
// Javascript me ye support nahi karta isliye isme sirf aur sirf numbered indexing hoti hai

const person = [];
person["age"] = 30;
console.log(Array.isArray(person)); // true
console.log(person[0]); // undefined

// New keyword ke sath array create karne se kaafi baar dikkat ajati hai, jaise ek array banaya ho jisme sirf ek element ho 40

const numbers = new Array(40);
console.log(numbers); // [ <40 empty items> ]
// Ye 40 element ka ek array bana dega jabki hum chahte the ki sirf ek array bane jisme ek value ho wo bhi 40

// Agar check karna ho ki wo array hai ya nahi to 2 method hai
console.log(Array.isArray(numbers));
console.log(numbers instanceof Array);
