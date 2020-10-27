// 1
let n = 0;
for (i = 0; i <= 20; i++) {
  n = n + i;
}
console.log("The sum from 1 to 20 is", n);

// 2
for (bot = 1; bot <= 5; bot++) {
  if (bot === 1) {
    console.log(`There is ${bot} bottle of beer on the wall`);
  } else console.log(`There are ${bot} bottles of beer on the wall`);
}

// 3
for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log("Even #", i);
  } else console.log("Odd #", i);
}

// 4
for (i = 0; i <= 10; i++) {
  console.log(`${i} * 9 = ${i * 9}`);
}

//4 bonus
for (i = 0; i <= 10; i++) {
  for (j = 0; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 5
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else console.log(i);
}

// 6
for (i = 0; i <= 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    console.log(i);
  }
}

// 7
// 7.1
for (i = 100; i <= 1000; i = i + 100) {
  console.log(i);
}

// 7.2
for (i = 0; i <= 7; i++) {
  console.log(2 ** i);
}

// 7.3
for (i = 0; i <= 5; i++) {
  console.log(2 * i);
}

// 7.4
for (i = 1; i <= 5; i++) {
  console.log(3 * i);
}

// 7.5
for (i = 9; i >= 0; i = i - 1) {
  console.log(i);
}

// 7.6
for (i = 1; i <= 4; i++) {
  console.log(i);
  console.log(i);
  console.log(i);
}

// 7.7
for (i = 0; i <= 3; i++) {
  for (j = 0; j <= 4; j++) {
    console.log(j);
  }
}

// 8
let str = "adfadfadf";
console.log("str ==>", str);
let arr = str.split("").reverse().join("");
console.log("reverted arr ==>", arr);
if ((str == arr) == true) {
  console.log(`${str} is a Palindrome`);
} else console.log(`${str} is not a Palindrome`);
