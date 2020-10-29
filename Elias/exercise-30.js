// 1 Addition

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2 Beer

for (let i = 1; i <= 5; i++) {
    console.log(`There are ${i} bottles of beer on the wall!`);
}

// 3 The odd/even reporter

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even!`);
    } else {
        console.log(`${i} is odd!`);
    }
}

// 4 Multiplication Tables

const tableArr = [];
for (let i = 1; i <= 10; i++) {
    let multiplier = i * 9;
    console.log(multiplier);
    tableArr.push(multiplier)
    for (let i = 1; i < 10; i++) {
        let multiplier2 = multiplier * i;
        tableArr.push(multiplier2);
    }
}
let tableString = tableArr.join()
console.log(tableString);

// 5. Fizz Buzz
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    }
}

// 6. Sum of Multiples
let sum;
let sum2;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0) {
        sum = i;
    } else if (i % 5 === 0) {
        sum2 = i;
    }
}
let total = sum + sum2;
console.log(total);
// 7. Write programs that produce the following output:
// 100 200 300 400 500 600 700 800 900 1000
const hundredArr = [];
for (let i = 100; i <= 1000; i += 100) {
    
    hundredArr.push(i);
}
console.log("=> ",hundredArr.join(" "));

// 1 2 4 8 16 32 64 128
const doublingArr = [];
for (let i = 2; i <= 128; i = i*2) {
    
    doublingArr.push(i);
}   
console.log("=> ",doublingArr.join(" "));

// 0 2 4 6 8 10
const twoArr = [];
for (let i = 2; i <= 10; i += 2) {
    
    twoArr.push(i);
}   
console.log("=> ",twoArr.join(" "));

// 3 6 9 12 15
const threeArr = [];
for (let i = 3; i <= 15; i += 3) {
    
    threeArr.push(i);
}   
console.log("=> ",threeArr.join(" "));

// 9 8 7 6 5 4 3 2 1 0
const decrementArr = [];
for (let i = 9; i >= 0; --i) {
    
    decrementArr.push(i);
}   
console.log("=> ",decrementArr.join(" "));

// 1 1 1 2 2 2 3 3 3 4 4 4
const tribletArr = [];
for (let i = 1; i <= 4; i++) {
    for (let x = 0; x < 3; x++) {
        tribletArr.push(i);
    }
}   
console.log("=> ",tribletArr.join(" "));

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
const untilFourArr = [];
let container = [];
for (let i = 0; i < 3; i++) {
    for (let x = 0; x <= 4; x += 1) {
        untilFourArr.push(x);
}
}   
console.log("=> ",untilFourArr.join(" "));

// 8. isPalindrome.
let name = "Anne";
name = name.toLowerCase();
let reversedName = name.split('').reverse().join();
if (name === reversedName) {
    console.log(`${name} is a palindrome`);
} else {
    console.log(`${name} is not a palindrome`);
}

let name2 = "anna";
let name3 = [];
for (let i = 0; i <= name2.length -1; i++) {
    name3.push(name2[i]);
}
let name4 = name3.reverse().join('');
if (name2 === name4) {
    console.log(`${name2} is a palindrome`);
} else {
    console.log(`${name2} is not a palindrome`);
}