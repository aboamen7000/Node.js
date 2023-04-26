// Synchronous vs Asynchronous

// Synchronous
const fs = require('fs');
// utf8 : character encoding format 
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);
console.log('Finished Reading the file.');


//Asynchronous

const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data);
});

console.log('Starting reading the file');