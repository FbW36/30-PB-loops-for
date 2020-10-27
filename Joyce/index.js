//1. Addition. Write a program to add up the numbers 1 to 20.
let res = 0;
for (let i = 1; i < 21; i++) {
  res = res + i;
  console.log(res);
}

//2. There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
for (let i = 1; i <= 5; i++) {
  console.log(`There is ${i} bottle of beer on the wall.`);
}

//3. The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

//4. Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
let box = [];
for (let i = 0; i <= 10; i++) {
  console.log(i * 9);
  box.push(i * 9);
}
console.log(box);

//5. Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  }
  if (i % 5 == 0) {
    console.log("Buzz");
  }
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
}

//6. Sum of Multiples: Write a program to add the multiples of 3 and 5 under 1000.
for (let i = 1; i < 1000; i++) {
  let sum = 3 * 5;
  console.log(i + sum);
}

//7. Write programs that produce the following outputs:

//100 200 300 400 500 600 700 800 900 1000
let x = [];
for (let i = 1; i <= 10; i++) {
  x.push(`${i}00`);
}
console.log(x.join(" "));

// 1 2 4 8 16 32 64 128
let x1 = [];
for (let i = 1; i <= 8; i++) {
  x1.push(2 ** i);
}
console.log(x1.join(" "));

// 0 2 4 6 8 10
let x2 = [];
for (let i = 0; i <= 5; i++) {
  x2.push(2 * i);
}
console.log(x2.join(" "));

// 3 6 9 12 15
let x3 = [];
for (let i = 1; i <= 15; i++) {
  if (i % 3 == 0) {
    x3.push(i);
  }
}
console.log(x3.join(" "));

// 9 8 7 6 5 4 3 2 1 0
let x4 = [];
for (let i = 0; i < 10; i++) {
  x4.push(i);
}
x4.reverse();
console.log(x4.join(" "));

// 1 1 1 2 2 2 3 3 3 4 4 4
let x5 = [];
for (let i = 1; i <= 4; i++) {
  x5.push(`${i} ${i} ${i}`);
}
console.log(x5.join(" "));

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let x6 = [];
for (let i = 0; i <= 4; i++) {
  x6.push(`${i}`);
}
console.log(x6.join(" "), x6.join(" "), x6.join(" "));
