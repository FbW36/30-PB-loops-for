//Write a program to add up the numbers 1 to 20.
for(i = 0; i <= 20; i++){
    console.log(i)
}

//Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 
const bottles = [1, 2, 3, 4, 5] ;

for(i = 0; i < 5; i++){
    let message = "There are " + bottles[i] + " bottles of beer on the wall"
    console.log("message ==>", message) ;
}

//Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for(i = 0; i <= 20; i++){
    if([i] % 2 == 0){
        console.log(`number ==> ${[i]} is even`)
    }else{
        console.log(`number ==> ${[i]} is odd`)
    }
} // 0 is even 1 is odd .........

//Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
for(let i = 0; i <= 10; i++){
    let newNumber = [i] * 9 ;
    console.log("multiply", i + " by 9 ==>", newNumber); 
} // multiply 2 by 9 ==> 18 ........

// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

//5. Write a program which iterates the integers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number 
//and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz".
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0){
        console.log("Fizz") ;
    }else if(i % 5 == 0){
        console.log("Buzz") ;
    }else if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }else{
        console.log(i)
    }
}
//6.Write a program to add the multiples of 3 and 5 under 1000.

//7. Write programs that produce the following outputs: 



//! 30-8 Palindrom
let name = "Anna" ;
name = name.toLowerCase(); 
let reversedName = name.split("").reverse().join();

console.log("reversedName ==>", reversedName) ; 

if(name === reversedName) {
    console.log(`${name} is a palindrom!`)
}else{
    console.log(`${name} is a not palindrom!`)
}

//for loop
let name2 = "anna" ;
let name3 = [] ;
for (let i = name2.length -1; i >= 0; --i){
    name3.push(name2[i]);
}
let name4 = name3.join("");
console.log(name4);
if(name2 === name4){
    console.log(`${name2} is a Palindrome!`) ; 
}else{
    console.log(`${name2} is a not Palindrome!`) ; 
}