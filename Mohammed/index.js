
// 1- Addition
for (let i = 1; i <= 20; i++)
{
    console.log(i);
}


// 2- 
const arrOfBottles = ['one', 'two', 'three', 'four', 'five'];
let arrOfBottlesOutput=  [];

for (let i = 0; i <= arrOfBottles.length-1; i++)
{
    arrOfBottlesOutput.push(`There are ${arrOfBottles[i]} bottle on the wall `);
}

console.log(arrOfBottlesOutput);


// 3-
for (let i = 1; i <= 20; i++ )
{
    if (i % 2 === 0)
    {
        console.log(`The number ${i} is even`);
    }
    else
    {
        console.log(`The number ${i} is odd`);
    }
}


// 4-
for (let i = 0; i <= 10; i++)
{
    console.log(` "${i} * 9 = ${i*9}" `);
}


// 4- Bonus
for (let i = 1; i <= 10; i++)
{
    for (let j = 1; j <= 10; j++)
    {
        console.log(` "${i} * ${j} = ${i*j}" `); 
        //console.table(` "${i} * ${j} = ${i*j}" `);
    }
    console.log('\t');
    console.log('\n');
}


// 5-
for (let i = 1; i <= 100; i++)
{
    if ( ((i % 3) === 0) && ((i % 5) !== 0) )
    {
        console.log("Fizz")
    } 
    else if ( ((i % 5) === 0) && ((i % 3) !==0) )
    {
        console.log("Buzz");
    }
    else if ( ((i % 3) === 0) && ((i % 5) === 0) )
    {
        console.log("FizzBuzz");
    }
    else
    {
        console.log(i);
    }
}


// 6- 
let sum = 0;
for (let i = 1; i <= 1000; i++)
{
    if ( ((i % 3) === 0) && ((i % 5) === 0) )
    {
        sum+= i;
    }
}
console.log(sum);


// 7-

// a.
for (let i = 1; i <= 10; i++)
{
    console.log(i*100);
}

// b.
for (let i = 0; i < 8; i++)
{
    console.log(Math.pow(2, i));
}

// c
for (let i = 0; i <= 10; i++)
{
    if (i % 2 == 0)
    {
        console.log(i);
    }
}

// d
for (let i = 1; i <= 15; i++)
{
    if (i % 3 == 0)
    {
        console.log(i);
    }
}


// e.
for (let i = 9; i >= 0; i--)
{
    console.log(i);
}


// f.
for (let i = 1; i <= 4; i++)
{
    for (let j = 1; j <= 3; j++)
    console.log(i); 
} 

// g.
for (let i = 1; i <= 3; i++)
{
    for (let j = 0; j <= 4; j++)
    {
        console.log(j);
    }
}

// 8-
let originalWord = 'madam';
let wordToArray = originalWord.split("");
console.log(wordToArray, typeof wordToArray); 

wordToArray.reverse();
console.log(wordToArray);

let manipulatedWord = wordToArray.join("");
console.log(manipulatedWord, typeof manipulatedWord);

if ( originalWord === manipulatedWord )
{
    console.log(`The word ${originalWord} is palindrome`);
}
else
{
    console.log(`The word ${originalWord} is not a palindrome word`);
}