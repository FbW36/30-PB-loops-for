// 1 Addition. Write a program to add up the numbers 1 to 20.
let sum = 0;
for (let i = 1; i <= 20; i++) {
  //sum = sum + i;
  sum += i;
  console.log(sum); // 210
}

// 2 There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
let i = 1;
for (i = 1; i <= 5; i++) {
  if (i === 1) {
    console.log("there is one bottle of beer on the wall");
  } else {
    console.log(`There are ${i} bottle of beer on the wall`);
  }
}

// 3  Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// 4 Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (let i = 0; i <= 10; i++) {
  let res = i * 9;
  console.log(`${i} * 9 = ${res}`);
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j} `);
  }
}

// 5 Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}
// 6 Write a program to add the multiples of 3 and 5 under 1000.
let summ = 0;
for (i = 1; i < 1000; i++) {
  if (i % 3 === 0) {
    summ += summ;
  }
  if (i % 5 === 0) {
    summ += summ;
  }
}
console.log(summ);

//7a  100 200 300 400 500 600 700 800 900 1000
for (i = 100; i <= 1000; i += 100) {
  console.log(i);
}

//7b 1 2 4 8 16 32 64 128
let nil = [];
for (i = 1; i <= 128; i *= 2) {
  nil.push(i);
}
console.log(nil.join(" "));

// 0 2 4 6 8 10
let nil2 = [];
for (i = 0; i <= 10; i += 2) {
  nil2.push(i);
}
console.log(nil2.join(""));

// 3 6 9 12 15
let nil3 = [];
for (i = 3; i <= 15; i += 3) {
  nil3.push();
}
console.log(nil3.join(""));

// 9 8 7 6 5 4 3 2 1 0
let nil4 = [];
for (i = 9; i >= 0; i--) {
  nil4.push();
}
console.log(nil4.join(""));

// palindrom
let name = "Anna";
name = name.toLowerCase();
let reversedName = name.split("").reverse().join("");
console.log(reversedName);

if (name === reversedName) {
  console.log(`${name} is a polindrom`);
} else {
  console.log(`${name} is not a palindrom`);
}

// second way with for loop

let name2 = "anna";
let name3 = [];
for (let i = name2.length - 1; i >= 0; --i) {
  name3.push(name2[i]);
}

let name4 = name3.join("");
console.log(name4);

if (name2 === name4) {
  console.log(`${name2} is a polindrom`);
} else {
  console.log(`${name2} is not polindrom`);
}

//  1 1 1 2 2 2 3 3 3 4 4 4
let arr = [];

for (i = 1; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    arr.push(i);
  }
}
console.log(arr.join(" "));

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

const str = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    str.push(j);
  }
}
console.log(str.join(" "));

//-----------------------
