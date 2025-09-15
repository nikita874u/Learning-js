// There are many types of loop in js for arrays

// for loop
// forEach
// for..of (most important and most usable)
// while

const arr1 = ["sagar", "nikita", "priyanka", "maitri", "govind", "doaremon"];
// Note: the no of elements in array = array's length

// for loop
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// forEach Loop
// arr1.forEach((v) => {
//     console.log("Hello ", v);
// });

// for..of loop
// for (let n of arr1) {
//     console.log("The name is: ", n);
// }

// while loop
// let i = 0;
// while (arr1[i] != null) {
//     console.log(arr1[i]);
//     i++;
// };

// break and continue are jump functions

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === "priyanka") {
//         continue; // operation continue means will skip operation for this condition
//     };
//     if (arr1[i] === "maitri") {
//         break; // loop breaked, no more operation will happen
//     };
//     console.log("hello:", arr1[i]);
// };

// break and continue can be used in for loop, for..of loop but not in forEach loop

// Difference between forEach and for..of loop ( V.Imp )

/*| Feature           | `forEach`                            | `for..of`                                      |
| ----------------- | ------------------------------------ | ---------------------------------------------- |
| Type              | Array method                         | Loop syntax                                    |
| Works on          | Arrays only                          | All iterables (array, string, map, set)        |
| Break/Continue    | ❌ Not possible                       | ✅ Possible                                     |
| Callback required | ✅ Yes                                | ❌ No                                           |
| Use case          | When you **must visit all** elements | When you may want **more control** (skip/stop) |
*/
