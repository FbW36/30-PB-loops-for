//Addition. Write a program to add up the numbers 1 to 20.
let additionResult = 0;
for (let i = 1; i <= 20; i++) {
  additionResult += i;
}
// console.log(additionResult);

//2
/* for (let i = 1; i <= 5; i++) {
    if(i === 1)console.log(`There is one bottle of been on the wall`);
    else {console.log(`There are ${i} bottles of been on the wall`);}
}
 */
//3
/* for (let i = 0; i <= 20; i++) {
    if(i % 2 === 0) console.log(`${i} is even`);
    else console.log(`${i} is odd`);
}
 */
//4
/* for (let i = 0; i < 10; i++) {
    console.log(`${i} * 9 = ${i * 9}`);
    
} */
//BONUS
/* for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10 ;j++) {
        console.log(`${i} * ${j} = ${i * j} ` );       
    }   
} */
//5
/* for (let i = 1; i <= 100; i++) {
  let output = ''
  if(i % 3 === 0) output += "Fizz";
  if(i % 5 === 0) output += "Buzz"
  console.log(output || i);
} */

//6
/* let totalMultiples3and5 = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) totalMultiples3and5 += i;
}
console.log(totalMultiples3and5); */

//7
/* for (let i = 1; i <= 10; i++) {
  console.log(`${i * 100}`);
}
for (let i = 0; i < 8; i++) {
  console.log(`${2 ** i}`);
}
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) console.log(`${i}`);
}
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) console.log(`${i}`);
}
for (let i = 9; i >= 0; i--) {
  console.log(`${i}`);
}
for (let i = 9; i >= 0; i--) {
  console.log(`${i}`);
}
let counterTo4 = 0;
let i = 1;
for (;;) {
  console.log(`${i}`);
  counterTo4++;
  if (counterTo4 === 4) {
    i++;
    counterTo4 = 0;
  }
  if (i === 5) {
    break;
  }
} 
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`${j}`);
  }
} */
//8
let word = "madam";

function checkPalindrom(word) {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindrom(word));
