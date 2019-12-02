const fs = require('fs')
let contents = fs.readFileSync('day1.txt', 'utf8');
let vals = contents.split('\r\n').map(num => Number(num));

let sum = 0;
let fullSum = 0;
for (const i of vals) {
    sum += getMass(i);
}

// console.log('base sum: ', sum); //3443395

for (const i in vals) {
    fullSum += getFullMass(i);
}

// console.log('fullSum: ', fullSum);

console.log(getFullMass(14) - 14);
// console.log(getFullMass(1969) - 1969);
// console.log(getFullMass(100756) - 100756);

function getMass(val) {
    return (Math.floor(val / 3) - 2);
}

function getFullMass(val) {
    // console.log('val: ', val)
    if ((Math.floor(val / 3) - 2) <= 0) {
        // console.log('(Math.floor(val / 3) - 2): ', (Math.floor(val / 3) - 2));
        return 0;
    }
    // console.log('val: ', val);
    return (getFullMass(Math.floor(val / 3) - 2));
}

function factorial(x) {
    if (x < 0) return;
    if (x === 0) return 1;
    return x * factorial(x - 1);
}
console.log(factorial(3));