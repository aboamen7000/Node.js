// Event Loops

// method 1 : setTimeout function

console.log('Starting the System..!');

setTimeout( ()=> {
    console.log('inside the setTimeout operator...!');
}, 3000);

console.log('Closing The Process..!');


// method 2 : setInterval function

let counter = 0;
console.log('Starting the counter');
const intervalo = setInterval( ()=> {
counter++; // increment +1
// counter = counter + 2; // custom increment +2
// counter +=3; // custom increment +3
console.log(`Increment the value is : ${counter}`);
if (counter === 10)
{
    clearInterval(intervalo);
    console.log('Ending..!');
}
}, 200);


// method 3 : calculate the factorial of a number (10 9 8 7 6 5 4 3 2 1) (using while loop)

const readline = require('readline');

const rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
);

rl.question('Please Enter a valid number as factorial : ', (answer) =>{
    const number = parseInt(answer);
    let factorial = 1;

    let index = number;

  while (index > 1){
    factorial *=  index;
    index -= 1;
  }

  console.log(`Factorial of the number ${number} is : ${factorial}`);
  rl.close();

} );



// method 4 : reads user input from the console and processes it until the user enters a specific command to exit

const readline = require('readline');

const rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
);

function command_process(){
    let command = '';

    rl.question("please enter command close to exit the app : ", (answer)=>{
        command = answer.trim();
        

        if (command.includes('close')){
            console.log(`Thanks, app will be terminal close...`);
            rl.close();
        }else
        {
            console.log(`you entered : ${command}`);
            command_process();
        }


    } );
}

command_process();