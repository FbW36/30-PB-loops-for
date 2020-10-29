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