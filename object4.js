// Object Constructor Functions

// Ye hum tab use karte hai jab hume ek hi type (same property wale) kaafi sare object create karne ho. Isme hum this keyword use karte hai...

function Human(nam, gender, age, color) {
  this.Name = nam;
  this.Gender = gender;
  this.Age = age;
  this.Color = color;
}

const sagar = new Human("Sagar", "Male", 25, "Fair (Par kam)");
const nikita = new Human("Nikita", "Female", 20, "Very Fair (beautiful)")
console.log(sagar);
console.log(nikita);

/* This is for multi line comments
Human {
  Name: 'Sagar',
  Gender: 'Male',
  Age: 25,
  Color: 'Fair (Par kam)'
}
Human {
  Name: 'Nikita',
  Gender: 'Female',
  Age: 20,
  Color: 'Very Fair (beautiful)'
}
*/


