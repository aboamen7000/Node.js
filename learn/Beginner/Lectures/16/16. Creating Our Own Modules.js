// Creating Our Own Modules
const sum_numbers = require('./sum_module');

const numb1 = 10;
const numb2 = 5;
const numb3 = 8;


const sum_2_numbs = sum_numbers.calculate_2_numbs_sum(numb1,numb2);
const sum_3_numbs = sum_numbers.calculate_3_numbs_sum(numb1,numb2,numb3);

console.log(`The result of sum 2 numbers is : ${numb1} + ${numb2} = ${sum_2_numbs}`);
console.log(`The result of sum 3 numbers is : ${numb1} + ${numb2} + ${numb3} = ${sum_3_numbs}`);

/// sum_module.js {our own module}

const calculate_2_numbs_sum = (a,b) => {
    // const result = a + b;
    // return result;
    return a + b;
};

const calculate_3_numbs_sum = (a,b,c) => {
    // const result = a + b + c;
    // return result;
    return a + b + c;
};

module.exports = {
    calculate_2_numbs_sum,
    calculate_3_numbs_sum
};

// or use short hand by export
//example : 
module.exports.calculate_4_numbs_sum = const calculate_4_numbs_sum = (a,b,c,d) => {
    // const result = a + b + c + d;
    // return result;
    return a + b + c + d;
};