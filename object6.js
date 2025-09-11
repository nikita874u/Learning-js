// Object destructure: - object ki kuch properties ko bahar nikalna
const obj1 = {
  name: "Nikita",
  nickName: "Nikki and Shona",
  class: "B.tech 3rd year",
  age: 20,
};
console.log(obj1);
// const name = obj1.name;
// const age = obj1.age;

const { name, age } = obj1; // Obj1 se name and age property ko destructure karre hai

console.log("name: ", name);
console.log("age: ", age);

// Agar hume object ki keys and values print karani ho

let val1 = Object.keys(obj1);
console.log(val1); // Object.keys() method is used to find all keys in array form // Output: [ 'name', 'nickName', 'class', 'age' ]

let val2 = Object.values(obj1);
console.log(val2); // Output: [ 'Nikita', 'Nikki and Shona', 'B.tech 3rd year', 20 ]

let val3 = Object.entries(obj1);
console.log(val3);
/*
[
  [ 'name', 'Nikita' ],
  [ 'nickName', 'Nikki and Shona' ],
  [ 'class', 'B.tech 3rd year' ],
  [ 'age', 20 ]
]
*/

// NOTE: typeof null; // "object"

// for... in loop ( helps us to iterate over each key-value in an object )
const obj = {
  name: "john",
  age: 30,
  mobile: "6398141162",
};

for (let i in obj) {
  console.log(`${i} => ${obj[i]}`);
}
