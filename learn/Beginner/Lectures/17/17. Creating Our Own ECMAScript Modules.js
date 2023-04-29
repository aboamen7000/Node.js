// Creating Our Own ECMAScript Modules
// test.mjs

export const calculate_2_numbs_sum = (a,b) => {
    // const result = a + b;
    // return result;
    return a + b;
};

export const calculate_3_numbs_sum = (a,b,c) => {
    // const result = a + b;
    // return result;
    return a + b + c;
};

/// sum_module.mjs

import { calculate_2_numbs_sum } from './test.mjs';
import { calculate_3_numbs_sum } from './test.mjs';

const numb1 = 10;
const numb2 = 5;
const numb3 = 8;

console.log(`The result of sum 2 numbers is : ${numb1} + ${numb2} = ${calculate_2_numbs_sum(numb1,numb2)}`);
console.log(`The result of sum 3 numbers is : ${numb1} + ${numb2} + ${numb3} = ${calculate_3_numbs_sum(numb1,numb2,numb3)}`);