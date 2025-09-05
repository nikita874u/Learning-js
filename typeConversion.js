// String conversion

const var1 = 1; // Number
const str1 = String(var1);
console.log(typeof str1); // String
// Number → String
String(123); // "123"
(123).toString(); // "123"

// Boolean → String
String(true); // "true"
true.toString(); // "true"

// Null & Undefined
String(null); // "null"
String(undefined); // "undefined"

// Number Conversion

// String → Number
Number("123"); // 123
Number("12.5"); // 12.5
parseInt("42px"); // 42
parseInt("12.15"); // 12
parseFloat("3.14"); // 3.14

// Boolean → Number
Number(true); // 1
Number(false); // 0

// Null & Undefined
Number(null); // 0
Number(undefined); // NaN (Not a Number)
