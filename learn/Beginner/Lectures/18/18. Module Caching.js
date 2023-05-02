// Module Caching

console.log("Starting... 1st calling");
const module_1 = require('./module');


console.log("Starting... 2nd calling");
const module_2 = require('./module');


console.log(`module_1 get value is :`, module_1.getvalue()); // 1
console.log(`module_2 get value is :`, module_2.getvalue()); // 1

module_1.increment();

console.log(`module_1 get value is :`, module_1.getvalue()); // 2
console.log(`module_2 get value is :`, module_2.getvalue()); // 2

module_2.increment();
module_1.increment();

console.log(`module_1 get value is :`, module_1.getvalue()); // 4
console.log(`module_2 get value is :`, module_2.getvalue()); // 4

/// methods.js {our own module}

let value = 1;

module.exports = {
    increment : ()=>{
        // value = value + 2; // adding cutome values
        // value += 2; // adding cutome values
        value++; // adding 1
    },

    getvalue : function(){
        return value;
    }

};