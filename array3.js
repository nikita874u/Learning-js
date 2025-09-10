// To find the length of an array
// using in-build property .length
const arr1 = ["A", "B", "C", "D"];
console.log(arr1.length);

// without using in-build property
function findLength(arr1) {
  let counter = 0;
  arr1.forEach((element) => {
    counter++;
  });
  console.log(counter);
}
