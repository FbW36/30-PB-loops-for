//1
for(i=1;i<=20;i++){
    console.log("1==>",i);
}

//2
for(i=1;i<=5;i++){
    let sentence = "There are x bottle of beer on the wall"
    if(i===1){
    sentence = sentence.replace("x", i);
    sentence = sentence.replace("are", "is")
    } 
    else{
    sentence =  sentence.replace("x", i);
    }
    console.log(sentence);
}

//3
for(i=0;i<=10;i++){
    if(i%2==0){
        console.log(i+ " is even");
    }
    else{
        console.log(i + " is odd");
    }
}

//4
for(i=0;i<=10;i++){
    console.log("4==>",i+" * 9 = " + i*9);
}
  //Bonus
for(i=0;i<=10;i++){
        for(j=0;j<=10;j++){
        console.log(`Bonus==> ${i} * ${j} = `+i*j);
        }
}




//5
for(i=1;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    else if(i%3===0){
        console.log("Fizz");
    }
    else if (i%5===0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}


//6
let sum = 0;
for (let x = 0; x < 1000; x++)
{
    if (x % 3 === 0 && x % 5 === 0)
    {
       sum += x;
    }
}
console.log("sum==>",sum);

//7
//>100 200 300 400 500 600 700 800 900 1000
for(i=100;i<=1000;i+=100){
   console.log(i);
}

//>1 2 4 8 16 32 64 128
for(i=1;i<=128;i*=2){
    console.log(i);
}

//>3 6 9 12 15
for(i=3;i<=15;i+=3){
    console.log(i);
}

//>9 8 7 6 5 4 3 2 1 0
for(i=9;i>=0;i--){
    console.log(i);
}

//>1 1 1 2 2 2 3 3 3 4 4 4
for(i=1;i<=4;i++){
    console.log(i);
    console.log(i);
    console.log(i);
}

console.log("*********************************");

//>0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for(i=0;i<=3;i++){
    for(j=0;j<=4;j++){
        console.log(j);
    }
}


//8
let palindrome = "tarrattarrat";
let palindromeReverse = palindrome.split("").reverse().join("");
let isPalindrome = (palindrome === palindromeReverse)?"It is palindrome":"It is not palindrome"
console.log(isPalindrome);