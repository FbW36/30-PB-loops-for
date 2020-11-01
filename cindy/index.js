//30-PB-loops-for
//Programming Basics: For Loops

//These exercises are designed for practising "for" loops. Print all your results to the console.

//1. Addition. Write a program to add up the numbers 1 to 20.
function numSum(n){
    let sum = 0;
      for(i = 0; i <= n; i++){
        sum += i; 
         }
        console.log(`Sum of all numbers included here => ${sum}`)
         }
        numSum(20);
/************************************* */

//2. There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.

function outputText(){
      for(let i = 1; i <= 5; i++){
        if(i >= 2){ console.log(`There are ${i} bottles of beer on the wall`);}
        if(i < 2){ console.log(`There is ${i} bottle of beer on the wall`);}
         }
         
}
outputText()

/******************************* */

//3. The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
function oddOrEven(){
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i + ' is even');
        } else {
            console.log(i + ' is odd');
        }
    }
}
oddOrEven()


/******************************* */

//4. Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
function table(){
    for(let i=0; i <= 10;i++){
        let byNumber = 9
        let result = (i*byNumber)
        console.log(`${i} * ${byNumber} = ${result}`)
    }
    for (let i = 0; i<=10;i++){
        for(byNumber =0; byNumber <=10; byNumber++){
            let result = byNumber * i;
            console.log(`${i} * ${byNumber} = ${result}`)
        }
    }
    
}
table()

/**************************** */

//5. Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
function fizzBuzz(){
    for (let i=1; i < 101; i++){
        if (i % 3 ==0 && i % 5 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
}
fizzBuzz()
/******************************* */

//6. Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.
function addMultiples(n){
    let sum = 0;
    for(i=0;i < n; i++){
        sum += (i % 3 == 0) || (i % 5 == 0)
        
    }
    console.log("Sum of all numbers included here => ", sum)
}
addMultiples(1000)

//7. Write programs that produce the following outputs:
let arr = []
for(let i=1; i<5;i++){
    console.log(i)
    for(let j = 0; j < 5; j++){
        arr.push(i)
    }
}
console.log(arr.join(" "))
//8. isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
let name = "cindy"
name = name.toLowerCase()
let reversedName = name.split("").reverse().join("")
console.log("reversed ", reversedName)
if(name === reversedName){
    console.log(`${name} is a palindrome`)
}else{
    console.log(`${name} is not a palindrome`)
}

//using for loops => 
let name2 = 'anna'
let name3 = []
for(let i = name2.length -1; i >= 0; --i){
    name3.push(name2[i])
}
let name4 = name3.join("")
console.log(name4)
if(name2 === name4){
    console.log(`${name2} is a palindrome`)
}else{
    console.log(`${name2} is not a palindrome`)
}