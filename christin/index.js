//?Addition.Write a program to add up the numbers 1 to 20.

for (let i = 0; i <= 20; i++) {
  let sum = i + i;
  console.log("1.", sum);
}

//0 + i = 1
//1 + i = 3

//?There are i bottles of beer on the wall.Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.

for (let i = 0; i <= 5; i++) {
  console.log(`2: There is ${i} bottle of beer on the wall.`);
}

//? 3. The odd / even reporter.Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen(e.g. "2 is even").

for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`3: ${i} is even`);
  } else {
    console.log(`3: ${i} is odd`);
  }
}

//? 4. Multiplication Tables.Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result(e.g. "2 * 9 = 18").Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10(100 results total).

let x;

for (let i = 0; i <= 10; i++) {
  sum = [i * 9];
  console.log("4.", sum);

  for (let i = 0; i <= 10; i++) {
    sum2 = [sum * i];
    console.log("4.", sum2.join(","));
  }
}

//? Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("5. FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("5. Fizz");
  } else if (i % 5 === 0) {
    console.log("5. Buzz");
  } else {
    console.log("5.", i);
  }
}

//? 6. Sum of Multiples
//Write a program to add the multiples of 3 and 5 under 1000

for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    let sum3 = i + i;
    console.log("6.", sum3);
  } else {
  }
}

//7. Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000
let arr3 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

for (let i = 0; i < 10; i++) {
  console.log("7.", arr3[i]);
}

//1 2 4 8 16 32 64 128

for (let i = 2; i <= 9; i++) {
  let res = Math.pow(i, 2);
  //break;
  console.log("8a.", res);
}

//0 2 4 6 8 10
for (let i = 0; i <= 5; i++) {
  let res3 = i + i;
  console.log("8b.", res3);
}
//3 6 9 12 15

for (let i = 0; i <= 5; i++) {
  let res4 = 3 * i;
  console.log("8c.", res4);
}
// 9 8 7 6 5 4 3 2 1 0

for (let i = 9; i >= 0; i--) {
  let res5 = i;
  console.log("8d.", res5);
}

// 1 1 1 2 2 2 3 3 3 4 4 4

const sum7 = [];
for (let i = 0; 1 < 4; i++) {
  for (let m = 0; m < 3; m++) {
    console.log("8f", m);
    sum7.push(i);
    break;
  }
  break;
}

let output = sum7.join(" ");
console.log("8f", output);

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
const arr2 = [];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
    console.log("0-4", j);
    arr2.push(i);
  }
}
console.group(arr2.join(" "));

// option 2

const arr7 = [];
for (let i = 1; i <= 3; i++) {
  for (let x = 0; x <= 4; x++) {
    arr7.push(x);
  }
}
let output7 = arr7.join(" ");
console.log(output7);

//? isPalindrome.Write a program to check whether a word is a palindrome or not.Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g.madam or tarrattarrat

// let name = "Anna";
// name = name.LowerCase();

// let reversedName = name.split("").reverse().join();
// console.log("reversed", reversedName);

// if (name === reversedName) {
//   console.log(`${name} is a palindrome`);
// } else {
//   console.log(`${name} is not a palindrome`);
// }

/// using a loop

let name2 = "anna";
let name3 = [];
for (let i = name2.length - 1; i >= 0; --i) {
  name3.push(name2[i]);
}
let name4 = name3.join("");
if (name2 === name4) {
  console.log(`${name2} is a palindrome`);
} else {
  console.log(`${name2} is not a palindrome`);
}

// Special Task
/**Given an array of numbers. Do "something" (create a function or method or whatever you come up with) to get a new array with the numbers of the previous array doubled.*/

let arrayNew = [1, 2, 3, 4];
for (let i = 0; i < 4; i++) {
  let doubledArray = arrayNew[i] * 2;

  console.log("extra", doubledArray); // [2,4,6,8]
}
/*2. Given a string. Use a for loop and get a new string with the elements of the previous string reversed. (Don't use strings or array methods)*/

let stringName = "christin";
let stringArray = stringName.split("");
let reversedString = [];
for (let i = 0; i < stringArray.length; i++) {
  reversedString.unshift(stringArray[i]);
  output2 = reversedString.join(" ");
}
console.log(output2); // "nitsirhc" */
