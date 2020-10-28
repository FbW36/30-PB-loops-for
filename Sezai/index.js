//1.1. **Addition.**  Write a program to add up the numbers 1 to 20

for(let i = 1; i<=20; i++){
    console.log(i);  }

//2. **There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 

for(let i=1; i<=5; i++){
    console.log(`There ${i === 1 ? "is" : "are"} ${i} bottle${i === 1 ? "" : "s"} of beer on the wall`);

    //hey cia i used a ternary operator instead of "if" hope its ok
}

//3. **The odd/even reporter.** Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for(let i=0; i<=20; i++){
    if(i%2===0){
        console.log(`the number ${i} is even`);
    }else{
        console.log(`the number ${i} is odd`);
    }
}


/**4. **Multiplication Tables.**
Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
**Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).*/

for(let i=0; i<=10; i++){
    let multiply= i * 9;
    console.log(multiply);
}

//4 bonus
for(let i=0;i<=10;i++){
    for(let j=0; j<=10; j++){
let multiply2 = i *j
console.log(multiply2);
    }
}

/**5. **Fizz Buzz**
Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". */

for(let i=1;i<=100; i++){
    if(i%3 ===0 && i%5===0){
        console.log(i, "FizzBuzz");
    }else if(i%3===0){
        console.log(i, "Fizz");
    }else if(i%5===0){
        console.log(i, "Buzz");
    }else {
        console.log(i);
    }
}

/**6. **Sum of Multiples**
Write a program to add the multiples of 3 and 5 under 1000. */
let x = 0
for(let i=1; i<1000; i++){
    if(i%3==0 && i%5==0){
        x +=i
    }
}
console.log("sum of multiples", x);


/**7. Write programs that produce the following outputs: 

// 100 200 300 400 500 600 700 800 900 1000*/
for(let i= 100; i<=1000; i+=100){
console.log("100 200 300 400 500 600 700 800 900 1000", i);
}

// 1 2 4 8 16 32 64 128
for(let i= 1; i<=128; i*=2){
console.log("1 2 4 8 16 32 64 128", i);
}


// 0 2 4 6 8 10
for(let i=0;i<=10;i+=2){
    console.log("0 2 4 6 8 10",i);
}


// 3 6 9 12 15
for(let i=3;i<=15; i+=3){
    console.log("3 6 9 12 15",i);
}

// 9 8 7 6 5 4 3 2 1 0
for(let i=9; i=0; i--){
    console.log("9 8 7 6 5 4 3 2 1 0", i);
}

// 1 1 1 2 2 2 3 3 3 4 4 4


// >
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat */