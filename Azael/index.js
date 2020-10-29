/*1. **Addition.** 
Write a program to add up the numbers 1 to 20.*/

for (let i = 1; i <= 20; i++) {
  console.log("i :>> ", i);
}

/*2. **There are i bottles of beer on the wall.** 
Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. */

const numToFive = ["one", "two", "three", "four", "five"];
for (let i = 0; i <= 4; i++) {
  if (i < 1) {
    console.log(`There is ${numToFive[i]} bottle of beer on the wall.`);
  } else {
    console.log(`There are ${numToFive[i]} bottles of beer on the wall`);
  }
}

/*3. **The odd/even reporter.**
Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").*/

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " is a even number");
  } else {
    console.log(i + " is a odd number");
  }
}

/*4. **Multiplication Tables.**
Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").*/

for (let i = 0; i <= 10; i++) {
  let multiplier9 = i * 9;
  console.log("Multiply 9 :>>" + `${i} * 9 = ${multiplier9}`);
}

// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).*/

for (let i = 0; i <= 10; i++) {
  for (let i2 = 0; i2 <= 10; i2++) {
    let multiplier = i * i2;
    console.log(`${i} * ${i2} = ${multiplier}`);
  }
}

/*5. **Fizz Buzz**
Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
/*6. **Sum of Multiples**
Write a program to add the multiples of 3 and 5 under 1000.*/

let sumMultiples = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
  }
  sumMultiples = sumMultiples + i;
}
console.log(sumMultiples);
// **Bonus**

// 7. Write programs that produce the following outputs:
// >100 200 300 400 500 600 700 800 900 1000
//A
for (let i = 100; i <= 1000; i += 100) {
  console.log(i);
}

//B
for (let i = 1; i <= 10; i++) {
  console.log(i * 100);
}
// >1 2 4 8 16 32 64 128
for (let i = 0; i < 8; i++) {
  console.log(2 ** i);
}

// >0 2 4 6 8 10

for (let i = 0; i < 6; i++) {
  console.log(2 * i);
}

// >3 6 9 12 15
for (let i = 1; i <= 5; i++) {
  console.log(3 * i);
}
// >9 8 7 6 5 4 3 2 1 0

for (let i = 9; i >= 0; i--) {
  console.log(i);
}
// >1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
  for (let i2 = 0; i2 < 3; i2++) {
    console.log(i);
  }
}

// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

for (let i = 0; i <= 4; i++) {
  for (let i2 = 0; i2 <= 4; i2++) {
    console.log(i2);
  }
}

//8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

let name = "Aycan";

name = name.toLowerCase();
let reversedName = name.split("").reverse().join("");
console.log("reversedName :>> ", reversedName);
if (name === reversedName) {
  console.log(`${name} is a palindrome`);
} else {
  console.log(`${name} is not palindrome`);
}

// with for loop solution

let name2 = "maruja";
let name3 = [];

for (let i = name2.length - 1; i >= 0; --i) {
  name3.push(name2[i]);
}
let name4 = name3.join("");
console.log("name4 :>> ", name4);
if (name2 === name4) {
  console.log(`${name2} is a palindrome`);
} else {
  console.log(`${name2} is not palindrome`);
}
