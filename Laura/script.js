// 1. **Addition.** 
// Write a program to add up the numbers 1 to 20.
for (let i = 1; i < 20; i++) {
    console.log(i);
}

// 2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 
const beerBottles = ["one", "two", "three", "four", "five"];

for (let i = 0; i <= 5; i++) {
    if (i === 0) {
        console.log(`There is ${beerBottles[i]} bottle of beer on the wall.`);
    }
    else {
        console.log(`There are ${beerBottles[i]} bottles of beer on the wall.`);
    }
}

// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (let i = 0; i <= 20; i++) {
    console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
}

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (let i = 0; i <= 10; i++) {
    let multiply = i * 9;
    console.log(`${i} * 9 = ${multiply}`);
    for (let j = 0; j <= 10; j++) {
        console.log((`${i} * ${j} = ` + i * j));
    }
}

// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (let x = 0; x <= 100; x++) {
    if (x % 3 === 0) {
        console.log(`${x} Fizz`);
    }
    else if (x % 5 === 0) {
        console.log(`${x} Buzz`);
    }
    else if (x % 3 === 0 && x % 5 === 0) {
        console.log(`${x} FizzBuzz`);
    }
    else {
        console.log(x);
    }
}


// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.
let sum = 0;
for (let z = 0; z < 1000; z++) {
    if (z % 3 === 0 && z % 5 === 0) {
        console.log("Sum of multiples ==> " + (sum += z));
    }
}

// **Bonus** 

// 7. Write programs that produce the following outputs: 
// >100 200 300 400 500 600 700 800 900 1000
for (let i = 0; i <= 10; i++) {
    console.log("Bonus: 100-inCrescendo ==> " + i * 100);
}

// >1 2 4 8 16 32 64 128
for (let i = 0; i < 8; i++) {
        console.log("Bonus: Power-eXponentation ==> " + 2 ** i);
}

// >0 2 4 6 8 10
for (let i = 0; i <= 5; i++) {
    console.log("Bonus: DoubleBubble ==> " + i * 2);
}

// >3 6 9 12 15
for (let i = 0; i < 6; i++) {
    console.log("Bonus: TripleXXX ==> " + i * 3);
}

// >9 8 7 6 5 4 3 2 1 0
for (let i = 9; i >= 0; i--) {
    console.log("Bonus: deCrescendo ==> " + i);
}

// >1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
    console.log("Bonus: art of repetition ==> " + i + i +i);
}

// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= 4; j++) {
        console.log(j);
    }
}

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
let palindrome = "annanna";
palindrome = palindrome.toLowerCase();
let palindromeReverse = palindrome.split("").reverse().join("");
console.log("Palindrome reverse ==> " + palindromeReverse);
let isPalindrome = palindrome === palindromeReverse ? `${palindrome} is palindrome` : `${palindrome} is not palindrome`;
console.log(isPalindrome);