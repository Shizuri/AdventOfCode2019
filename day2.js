const fs = require('fs')
let contents = fs.readFileSync('day2.txt', 'utf8');
let inputData = contents.split(',').map(num => Number(num));
let fakeData = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];


function intcode(noun, verb) {
    let workingData = [...inputData];
    // console.log(workingData);
    workingData[1] = noun;
    workingData[2] = verb;

    for (let i = 0; i < workingData.length; i++) {
        // console.log('i: ', i);

        let index0 = workingData[i];
        let index1 = workingData[i + 1];
        let index2 = workingData[i + 2];
        let index3 = workingData[i + 3];
        // console.log('index0: ', index0);
        // console.log('index1: ', index1);
        // console.log('index2: ', index2);
        // console.log('index3: ', index3);

        if (index0 === 1) {
            workingData[index3] = workingData[index1] + workingData[index2];
        }
        if (index0 === 2) {
            workingData[index3] = workingData[index1] * workingData[index2];
        }
        if (index0 === 99) {
            break;
        }
        i = i + 3;
        // console.log('------------------');
        // console.log('Data: ', workingData);
        // console.log('------------------');
    }

    // console.log(workingData[0]);
    return workingData[0];
}

for(let i = 0; i <= 99; i++){
    for(let j = 0; j <= 99; j++){
        // console.log('noun: ', i ,'verb: ', j);
        // console.log(intcode(i, j));
        if(intcode(i, j) === 19690720){
            console.log('noun: ', i ,'verb: ', j);
            console.log('answer: ', 100 * i + j);
            break;
        }
    }
}


