// 1. **Addition.**
// Write a program to add up the numbers 1 to 20.
let sum = 0;

for (let i = 1; i < 21; i++) {
  sum += i;

  console.log("sum", sum);
}

// 2. **There are i bottles of beer on the wall.**
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.

for (let i = 1; i < 6; i++) {
  console.log(`There is ${i} bottle of beer on the wall.`);
}

// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else console.log(`${i} is odd`);
}

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
for (let i = 0; i < 11; i++) {
  let result = i * 9;
  console.log(`${i} * 9 = ${result}`);
}

// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let i = 1; i < 11; i++) {
  for (let y = 1; y < 11; y++) {
    let result = i * y;
    console.log(`${i} * ${y} = ${result}`);
  }
}

// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else console.log(i);
}
// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.
let sum2 = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum2 += i;
  }
}
console.log(sum2);
// **Bonus**

// 7. Write programs that produce the following outputs:
// >100 200 300 400 500 600 700 800 900 1000
let hundred = [];
for (let i = 1; i <= 1000; i++) {
  if (i % 100 === 0) {
    hundred.push(i);
  }
}

console.log(hundred);

// >
// >1 2 4 8 16 32 64 128
//   1*2 = 2
//   2*2 = 4
//   4*2 =8
//   8*2 =16
//   16*2 =32
//   32*2 =64
//   64 *2 =128

for (let i = 0; i < 8; i++) {
  console.log("7====", `${2 ** i}`);
}

// console.log("====", 2 ** 0);
// >
// >0 2 4 6 8 10
// >

for (let i = 0; i < 6; i++) {
  console.log(2 * i);
}
// >3 6 9 12 15
// >

for (let i = 1; i < 5; i++) {
  console.log(3 * i);
}

// >9 8 7 6 5 4 3 2 1 0
// >
for (let i = 9; i >= 0; i--) {
  console.log(i);
}
// >1 1 1 2 2 2 3 3 3 4 4 4
// >
let repeatThree = [];
for (let i = 1; i < 5; i++) {
  for (let y = 1; y < 4; y++) {
    repeatThree.push(i);
  }
}
console.log(repeatThree.join(""));

// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

for (let i = 1; i < 4; i++) {
  for (let y = 0; y < 5; y++) {
    console.log(y);
  }
}

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

// ????????

let word = "aaabbbbaaa";
let reverseWord = word.split("").reverse().join("");
// console.log(reverseWord);
if (word === reverseWord) {
  console.log(`${word} is a palindrome`);
} else console.log(`${word} is not a palindrome`);

let word2 = "aaaannnn";
let reverseWord2 = word2.split("").reverse().join("");
function isPalindrome(word2) {
  if (word2 === reverseWord2) {
    console.log(`${word2} is a palindrome`);
  } else console.log(`${word2} is not a palindrome`);
}
