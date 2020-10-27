// Write a program to add up the numbers 1 to 20.
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum = sum + i;
}
console.log(sum);

// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
const numStrArr = ["one", "two", "three", "four", "five"];
for (let i = 0; i < 5; i++) {
  console.log(`There is ${numStrArr[i]} bottle of beer on the wall.`);
}

// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen(e.g. "2 is even").
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even.`);
  } else {
    console.log(`${i} is odd.`);
  }
}

// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result(e.g. "2 * 9 = 18").
// ** Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10(100 results total).
const arrTable = [];
for (let i = 0; i <= 10; i++) {
  let sum = i * 9;
  //   console.log(sum);
  if (sum > 0) {
    for (let x = 1; x <= 10; x++) {
      let sum2 = sum * x;
      //   console.log(sum2);
      arrTable.push(sum2);
    }
  }
}
let output10 = arrTable.join(" ");
console.log(output10);

// 5. ** Fizz Buzz **
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".For numbers which are multiples of both three and five print "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
}

// Write a program to add the multiples of 3 and 5 under 1000.
let sum2 = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum2 = sum2 + i;
  }
}
console.log(sum2);

// .Write programs that produce the following outputs:
// > 100 200 300 400 500 600 700 800 900 1000
const arr1 = [];
for (let i = 1; i <= 10; i++) {
  arr1.push(i * 100);
}
let output1 = arr1.join(" ");
console.log(output1);

// > 1 2 4 8 16 32 64 128
const arr2 = [];
let sum3 = 1;
for (let i = 1; i < 9; i++) {
  if (i < 2) {
    arr2.push(i);
  } else {
    sum3 = sum3 * 2;
    arr2.push(sum3);
  }
}
let output2 = arr2.join(" ");
console.log(output2);

// > 0 2 4 6 8 10
const arr3 = [];
let sum4 = 0;
for (let i = 1; i < 7; i++) {
  if (i < 2) {
    arr3.push(sum4);
  } else {
    sum4 = sum4 + 2;
    arr3.push(sum4);
  }
}
let output3 = arr3.join(" ");
console.log(output3);

// > 3 6 9 12 15
const arr4 = [];
let sum5 = 0;
for (let i = 1; i < 6; i++) {
  sum5 = sum5 + 3;
  arr4.push(sum5);
}
let output4 = arr4.join(" ");
console.log(output4);

// > 9 8 7 6 5 4 3 2 1 0
const arr5 = [];
let sum6 = 10;
for (let i = 1; i <= 10; i++) {
  sum6 = --sum6;
  arr5.push(sum6);
}
let output5 = arr5.join(" ");
console.log(output5);

// > 1 1 1 2 2 2 3 3 3 4 4 4
const arr6 = [];
for (let i = 1; i <= 4; i++) {
  for (let x = 1; x <= 3; x++) {
    arr6.push(i);
  }
}
let output6 = arr6.join(" ");
console.log(output6);

// > 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
const arr7 = [];
for (let i = 1; i <= 3; i++) {
  for (let x = 0; x <= 4; x++) {
    arr7.push(x);
  }
}
let output7 = arr7.join(" ");
console.log(output7);

// Write a program to check whether a word is a palindrome or not.

// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g.madam or tarrattarrat
let strToCheck = "hello olleh";

const backwardCheck = [];

for (let i = strToCheck.length - 1; i >= 0; --i) {
  backwardCheck.push(strToCheck[i]);
}
let backwardStr = backwardCheck.join("");

if (strToCheck === backwardStr) {
  console.log(`${strToCheck} is a palindrome`);
} else {
  console.log(`${strToCheck} is not a palindrome`);
}
