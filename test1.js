let obj1 = {};

obj1.name=" nikita ";
obj1.age=20;
obj1.roll=1;
obj1.address=" roorkee ";

console.log(obj1);

const {name , age } = obj1;
console.log("name:",name.trim());

console.log(JSON.stringify(obj1));

console.log(`name is ${name.trim()} and age is ${age}`);

let mango=new Map();

mango.set("colour", "blue");
mango.set("price" , 50);

console.log("map is :",mango)
mango.delete("price");
console.log("map after delete :", mango);

let a=(age).toString();
console.log(typeof a);






