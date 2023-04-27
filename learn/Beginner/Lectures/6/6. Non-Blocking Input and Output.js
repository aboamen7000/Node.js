// Non-Blocking Input and output

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

rl.question('Please Enter File name and the type : ', (fileName) => {

    fs.readFile(fileName, 'utf8', (err, data) => {
        if(err){
            console.log(err);
            rl.close();
            return;
        }
        console.log(`The Content of the file : ${fileName}`);
        console.log(data);
        rl.close();
    });
});

console.log(`Waiting for user input....`);