// Variable are containers of data
// we can declare variable in JS using let, var and const

// 1. let and var can be reinitialized but const cannot
let str1 = "Sagar";
console.log("String1: ", str1); // Sagar
str1 = "Nikita";
console.log("String1: ", str1); // Nikita

var str2 = "Nikita";
console.log("String2:", str2);
str2 = "Sagar";
console.log("String2:", str2);

// const str3; [Error] // 'const' declarations must be initialized.
const str3 = "Maitri";
console.log("String: ", str3);
// str3 = "Priyanka";
// console.log("String: ", str3); // [Error] : TypeError: Assignment to constant variable.

// 2. let and const has block scope but var has global scope

{
  let str4 = "Hello";
}
// console.log("String4: ", str4); // ReferenceError: str4 is not defined

{
  const str5 = "Mango";
}
// console.log("String5: ", str5); // ReferenceError: str5 is not defined

{
  var str6 = "Hehehehe";
}
console.log("String6: ", str6); // String6:  Hehehehe

// 3. Redeclation of variable with let and const is impossible but with var it is possible

let y = 5;
console.log(y); // 5
// let y = 6; // [Error: Cannot redeclare block-scoped variable 'x'.]

var x = "John Doe";
console.log("Value of x: ", x); // Value of x:  John Doe

var x = 0;
console.log("Value of x: ", x); // Value of x:  0

// 4. Effect of let, var and const in local and global scope

{
  // Global scope and its global variables
  let a = 1;
  const b = 2;
  var c = 3;
  console.log(`Value of a: ${a}, b: ${b}, c: ${c}`); // Value of a: 1, b: 2, c: 3
  {
    // local scope and its local variables
    let a = 4;
    const b = 5;
    var c = 6;
    console.log(`Value of a: ${a}, b: ${b}, c: ${c}`); // Value of a: 4, b: 5, c: 6
  }

  console.log(`Value of a: ${a}, b: ${b}, c: ${c}`); // Value of a: 1, b: 2, c: 6*
}

// With let, redeclaring a variable in the same block is NOT allowed:

var x = 2;   // Allowed
let x = 3;   // Not allowed

{
// let x = 2;   // Allowed
// let x = 3;   // Not allowed
}

{
// let x = 2;   // Allowed
// var x = 3;   // Not allowed
}