// Keep deep With Our CSV Parser
const fs =require('fs');
const csv = require('csv-parser');

// creating empty arraylist
const res = [];
const result = [];

fs.createReadStream('info.csv')
.pipe(csv())
.on('data' ,function(data){
    res.push(data);
    result.push(data);
})

.on('end', ()=> {
    console.log(res);
    const final_res = result.filter((results) => results.Name === "ia");
    console.log(final_res);
});



//result is

// res all data
[
  { Name: 'ia', Age: '28', Email: 'ia@programmer.net' },
  { Name: 'ali', Age: '33', Email: 'ali@dr.com' },
  { Name: 'ahmad', Age: '40', Email: 'ahmad@instructor.com' }
]

// res specific user info
[ { Name: 'ia', Age: '28', Email: 'ia@programmer.net' } ]



///////////////////////////

// same example but using .map to fitch all data

// Keep deep With Our CSV Parser
const fs =require('fs');
const csv = require('csv-parser');

fs.createReadStream('info.csv')
.pipe(csv())
.map((data) => {
    // Do some processing on each row of data
    return {
      name: data['Name'],
      age: parseInt(data['Age']),
      email: data['Email'],
    };
  })
  .on('data', (data) => {
    console.log(data);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });


// result....

// { name: 'ia', age: 28, email: 'ia@programmer.net' }
// { name: 'ali', age: 33, email: 'ali@dr.com' }
// { name: 'ahmad', age: 40, email: 'ahmad@instructor.com' }
// CSV file successfully processed

// In this example, the .pipe(csv()) call parses the CSV data and transforms it into a stream of JavaScript objects, 
// which are then passed to .map().

// The .map() call allows you to transform each row of data before it's passed to the next stream in the pipeline.
// In this example, we're converting the age property from a string to an integer, and selecting only the name, age, and email properties from the input data.

// After the data is processed by .map(), it's passed to the final stream in the pipeline,
// which listens for the 'data' event and logs each row of processed data to the console.

// Note that the map function used in this example is not the standard JavaScript Array.prototype.map() function,
// but a method provided by the through2-map module. This module provides a convenient way to write stream transforms
// that are similar to Array.prototype.map().