// Setting Up Our CSV Parser {npm install csv-parser}

const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('info.csv').pipe(csv()).on('data', function(row) {
    console.log(row);
})
.on('end', function(){
    console.log("CSV file successfully processed");
});

/// or push to array list + show error if happened ///////

// Setting Up Our CSV Parser


const csv = require('csv-parser');
const fs = require('fs');
const listo = [];
fs.createReadStream('info.csv').pipe(csv()).on('data', function(row) {
    tes.push(row);
})
.on('error', (error) => {
    console.log(listo);
    console.log(`CSV file error is :`, error);
})

.on('end', function(){
    console.log(listo);
    console.log("CSV file successfully processed");
});