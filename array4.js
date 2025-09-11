// Array inside array
// nested array
// Ques: Print the name of each car and its all models

/*
Name: Ford
model: Fiesta,foces
Name: BMW,
models: X30,X40
*/

const obj1 = {
  name: "John",
  age: 30,
  cars: [
    {
      name: "Ford",
      models: ["fiesta", "foces"],
    },
    {
      name: "BMW",
      models: ["X30", "X40"],
    },
  ],
};

for (let i in obj1.cars) {
  console.log(`Name: ${obj1.cars[i].name}`);
  console.log(`Model: ${obj1.cars[i].models}`);
}

// If we want to add one or more array we use concat() method

const arr1 = ["Sagar", "Nikita"];
const arr2 = ["Vipasha", "Priyanka"];
const arr3 = ["Gkv", "Quantum"];
const finalArr = arr1.concat(arr2, arr3);
console.log(finalArr);
