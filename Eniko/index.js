// These exercises are designed for practising "for" loops. Print all your results to the console.

// Addition. Write a program to add up the numbers 1 to 20.
for (let i = 0; i < 21; i++){
    console.log(i);
}
// There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
for (let beer = 1; beer < 6; beer++){
    if (beer == 1) {
        console.log(`There is ${beer} bottle of beer on the wall.`)
    } else {
        console.log(`There are ${beer} bottles of beer on the wall.`);
    }
}

// The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (let number = 1; number < 21; number++){
    if (number % 2 == 0) {
        console.log(` ${number} is even.`)
    } else {
        console.log(`${number} is odd.`);
    }
}


// Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (let tables = 0; tables < 11; tables++) {
    for (let multiplier = 0; multiplier < 11; multiplier++) {
        console.log(`${[tables]} * ${[multiplier]} =`, tables * multiplier);
    }
}
// Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (let numbers2 = 1; numbers2 < 101; numbers2++){
    if (numbers2 % 3 == 0 && numbers2 % 5 == 0) {
        console.log("FizzBuzz");
    } else if (numbers2 % 3 == 0) {
        console.log("Fizz");
    } else if (numbers2 % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(numbers2);
    }
}

// Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.
for (let y = 1; y < 1001; y++){
    if (y % 3 == 0 || y % 5 == 0) {
        console.log(y);
    }
}

// Bonus

// Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000
for (let a = 1; a < 1001; a++){
    if (a % 100 == 0) {
        console.log("bonus one", a);
    }
}
// 1 2 4 8 16 32 64 128
for (let b = 1; b < 129; b = b * 2){
    console.log("bonus 2", b);
}
// 0 2 4 6 8 10
for (let c = 0; c < 11; c = c + 2){
    console.log("bonus 3", c);
}
// 3 6 9 12 15
for (let d = 3; d < 16; d = d + 3){
    console.log("bonus 4", d);
}
// 9 8 7 6 5 4 3 2 1 0
for (let e = 9; e > -1; e = e - 1){
    console.log("bonus 5", e);
}

// 1 1 1 2 2 2 3 3 3 4 4 4
for (let f = 1; f < 5; f++) {
	for (let g = 0; g < 3; g++) {
		console.log("bonus 6", f);
	}
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (let h = 0; h < 5; h++){
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
}

// isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

let example = "abcddcba";
let input = example.split("");
let output = (example.split("")).reverse();
console.log(input);
console.log(output);

if (input[0] == output[0] && input[1] == output[1] && input[2] == output[2] && input[3] == output[3] && input[4] == output[4] ) {
    console.log("Palindrome!");
} else {
    console.log("Nope");
}