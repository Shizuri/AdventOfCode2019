const fs = require('fs')
let contents = fs.readFileSync('day2.txt', 'utf8');
let inputData = contents.split(',').map(num => Number(num));
let fakeData = [1,9,10,3,2,3,11,0,99,30,40,50];
let workingData = [...inputData];

// console.log(workingData);
workingData[1] = 12;
workingData[2] = 2;

for(let i = 0; i < workingData.length; i++){
    // console.log('i: ', i);

    let index0 = workingData[i];
    let index1 = workingData[i + 1];
    let index2 = workingData[i + 2];
    let index3 = workingData[i + 3];
    // console.log('index0: ', index0);
    // console.log('index1: ', index1);
    // console.log('index2: ', index2);
    // console.log('index3: ', index3);

    if(index0 === 1){
        workingData[index3] = workingData[index1] + workingData[index2];
    }
    if(index0 === 2){
        workingData[index3] = workingData[index1] * workingData[index2];
    }
    if(index0 === 99){
        break;
    }
    i = i + 3;
    // console.log('------------------');
    // console.log('Data: ', workingData);
    // console.log('------------------');
}

console.log(workingData[0]);