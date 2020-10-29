let log = console.log;

// Write a program to add up the numbers 1 to 20
for (i = 1; i <= 20; i++) {
  log(i);
}

// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles
for (i = 1; i <= 5; i++) {
  if (i < 2) {
    log(`There is ${i} bottle of beer on the wall.`);
  } else {
    log(`There are ${i} bottles of beer on the wall.`);
  }
}

// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen
for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    log(`${i} is even`);
  } else {
    log(`${i} is odd`);
  }
}

// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total)
for (i = 0; i <= 10; i++) {
  log(i * 9);
  for (x = 1; x <= 10; x++) {
    if (i > 0) {
      let multiResult = x * i;
      log(`${x} multiplied by ${i} = ${multiResult}`);
    }
  }
}

// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
let output1 = "Fizz";
let output2 = "Buzz";
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    log(output1 + output2);
  } else if (i % 3 === 0) {
    log(output1);
  } else if (i % 5 === 0) {
    log(output2);
  } else {
    log(i);
  }
}

// Write a program to add the multiples of 3 and 5 under 1000
for (i = 15; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    log(i);
  }
}

// Write programs that produce the following outputs:
// 1.
const numbers = [];
for (let i = 100; i <= 1000; i += 100) {
  numbers.push(i);
}
log("numbers 1 -- >", numbers.toString());

// 2.
const numbers2 = [];
for (i = 1; i <= 128; i *= 2) {
  numbers2.push(i);
}
log("numbers 2 -->", numbers2.toString());

// 3.
const numbers3 = [];
for (i = 0; i <= 10; i += 2) {
  numbers3.push(i);
}
log("numbers 3 -->", numbers3.toString());

// 4.
const numbers4 = [];
for (i = 3; i <= 15; i += 3) {
  numbers4.push(i);
}
log("numbers 4 -->", numbers4.toString());

// 5.
const numbers5 = [];
for (i = 9; i >= 0; i--) {
  numbers5.push(i);
}
log("numbers 5 -->", numbers5.toString());

// 6.
const numbers6 = [];
for (i = 1; i <= 4; i++) {
  numbers6.push(i);
  numbers6.push(i);
  numbers6.push(i);
}
log("numbers 6 -->", numbers6.toString());

// 7.
const numbers7 = [];
const cluster = [];
for (i = 0; i <= 4; i++) {
  numbers7.push(i);
  cluster.push(numbers7);
}
log("numbers 7 -->", cluster.toString().slice(0, 29));

// Write a program to check whether a word is a palindrome or not
let str = "racecar";
const strToArr = str.split("");
let newStr = strToArr.reverse().join("");
if (str === newStr) {
  log(`${str} --> a palindrome`);
}
