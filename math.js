// Random number generate

const randomNum = Math.random();
console.log("Random num:", randomNum); // 0.9782553084391019
// It gives value between 0 and 1

// Agar humko kisi number ko uske natural top number (3.6 ka 4, 1.2 ka 2) banana hai to Math.ceil() method use karte hai.

// Agar humko kisi number ko uske natural low number (3.6 ka 3, 1.2 ka 1) banana hai to Math.floor() method use karte hai.
/*
console.log(Math.ceil(3.6)); // 4
console.log(Math.floor(3.6)); // 3
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
*/
// if we want to generate a random n-digit number
// Syntax:- Example - 3 digit
/*
0.123456 random num always generate like this
we have to multiply the number with 9 family
1-digit = 9
2-digit = 90
3-digit = 900

Ques:- 9 se kyu?
random number ki range hai 0.0000000000001 - 0.99999999999
agar hum 9 se multiply krenge to range 0 - 9
safe case ke liye digit count ke sabse chote number ko add karna hota hai
*/

console.log(Math.floor(1 + Math.random() * 9));

const three_digit_num = Math.floor(100 + Math.random() * 900);
console.log(three_digit_num);

// 6-digit
// 12-digit random number generate

console.log(Math.floor(100000 + Math.random() * 900000));
console.log(Math.floor(100000000000 + Math.random()* 900000000000))