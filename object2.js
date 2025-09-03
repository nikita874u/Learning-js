// Creation of an object

const obj1 = {}; // using object literal (normal method of writing)
// hum kisi object me key-value alag se bhi insert kar sakte hai...
// Add Properties
obj1.name = "Nikita";
obj1.class = "B.Tech";
obj1.rollNo = 123;

console.log("The object is:", obj1); //  { name: 'Nikita', class: 'B.Tech', rollNo: 123 }

// Using new keyword
// Create an Object
const person = new Object({
  name: "Sagar",
  designation: "SDE & Team Lead",
  qualification: "BSC & MCA",
});

console.log("The person is:", person);
/*
The person is: {
  name: 'Sagar',
  designation: 'SDE & Team Lead',
  qualification: 'BSC & MCA'
}
*/
