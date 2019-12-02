const fs = require('fs')
let contents = fs.readFileSync('day1.txt', 'utf8');
let vals = contents.split('\r\n').map(num => Number(num));

let baseFuel = 0;
let fullFuel = 0;

for (const i of vals) {
    baseFuel += getMass(i);
}

for (const i of vals) {
    fullFuel += getFullMass(i);
}

console.log('baseFuel: ', baseFuel); //3443395
console.log('extraFuel: ', fullFuel); //

// console.log('base fuel:', getMass(1969));
// console.log('with recursion:', getFullMass(1969));
// console.log('regular:', getFullMass2(100756));
// console.log(getFullMass2(1969) - 1969);
// console.log(getFullMass(100756) - 100756);

function getMass(val) {
    return (Math.floor(val / 3) - 2);
}

//↓ with recursion
function getFullMass(val) {
    let calculated = getMass(val);
    if (calculated <= 0) {
        return 0;
    }
    return (getFullMass(calculated) + calculated);
}

//↓ without recursion
function getFullMass2(val){
    let valCoppy = val;
    let stopper = true;
    let newSum = 0;
    while(stopper){
        let calc = getMass(valCoppy);
        if(calc <= 0){
            stopper = false;
            break;
        }
        newSum += calc;
        valCoppy = calc;
    }
    return newSum;
}
