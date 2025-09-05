// JSON - javascript object notations
// The data transfer in API is in the form of JSON
// ek object jiski key string form me ho wo JSON
// The transfer of data in API is in the string form
// Type of JSON is string

// Example of JSON
const studInfo = `{
  "name": "Nikita",
  "class": "B.Tech CSE",
  "roll": 1,
  "isIntelligent": true,
}`;

// Conversion of object into JSON
const obj1 = {
  name: "mango",
  taste: "sweet",
  color: "yellow",
  rate: 100,
};

const jsonForm = JSON.stringify(obj1);
// The string form of an object is JSON
console.log(typeof jsonForm); // string
console.log(jsonForm); // {"name":"mango","taste":"sweet","color":"yellow","rate":100}

// Conversion of JSON into plain object

const jsonBody = `{ "name": "mango", "taste": "sweet", "color": "yellow", "rate": 100 }`;
const obj2 = JSON.parse(jsonBody);
console.log(typeof obj2); // object
console.log(obj2); // { name: 'mango', taste: 'sweet', color: 'yellow', rate: 100 }
