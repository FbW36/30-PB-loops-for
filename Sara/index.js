// 1)  Write a program to add up the numbers 1 to 20.
let number = 0;
for(let i = 1; i <= 20; i++){
    number += i; 
}
console.log(`The sum of the numbers 1 - 20 is ${number}!`); // 210

// 2) Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 

let bottles = ['1', '2', '3', '4', '5'] ;

for(let i = 0; i < bottles.length; i ++){
    if(i === 0){
        console.log(`There is ${bottles[i]} bottle of beer on the wall!`)
    }else{
        console.log(`There are ${bottles[i]} bottles of beer on the wall!`)
    }
};

// 3)  Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for(let i = 0; i <= 20; i++){
    if(i % 2 === 0){
        console.log(`${i} is even!`)
    }else{
        console.log(`${i} is odd!`)
    }
}; 

// 4) Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
for(let i = 0; i <= 10; i++){
    let number = i * 9;
    console.log(`${i} * 9 = ${number}!`);
};

// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// 5) Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0){
        console.log(`You got number ${i} its a FIZZ!`) ;
    }else if(i % 5 === 0){
        console.log(`You got number ${i} its a BUZZ!`) ;
    }else if(i % 3 === 0 && i % 5 === 0){
        console.log(`You got number ${i} its a FIZZ-BUZZ!`) ;
    }else{
        console.log(`You got ${i}, nor fizz or buzz, try again!`) ;
    } ;
} ;

// 6) Write a program to add the multiples of 3 and 5 under 1000.
let sum = 0;
for(let i = 0; i <= 1000; i++){
    if(i % 3 === 0 && i % 5 === 0){
        sum = sum + i; 
    }
}
console.log(`The sum of the multiples of 3 and 5 under 1000 is ${sum}`); // The sum of the multiples of 3 and 5 under 1000 is 33165

// 8) Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
let palindromeString = "Dammit im Mad";
let cleanString = palindromeString.toLowerCase().replace(/ /g, "");
console.log(cleanString); // dammitimmad
let reverseString = cleanString.split("").reverse().join("");
console.log(reverseString); // dammitimmad

if(cleanString === reverseString){
    console.log(`${palindromeString} is a Palindrome!`)
}else{
    console.log(`${palindromeString} is NOT a Palindrome`)
}; 

// second way

let palindromeString2 = "Dammit im Mad";
let cleanString2 = palindromeString2.toLowerCase().replace(/ /g, "");
console.log("cleanString ==>", cleanString2); 
let palindromeString3 = [];

for(let i = cleanString2.length -1; i >= 0; --i){
    palindromeString3.push(cleanString2[i])
}
let palindromeString4 = palindromeString3.join("");
console.log("PalindromeString ==>", palindromeString4); 

if(cleanString2 === palindromeString4){
    console.log(`${cleanString2} is a Palindrome!`)
}else{
    console.log(`${cleanString2} is NOT a Palindrome!`)
}
 