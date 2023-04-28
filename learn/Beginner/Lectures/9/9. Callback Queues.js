// Callback Queues types

// method 1 : setTimeout()

setTimeout(
    ()=>{
        console.log('Hello, its ia');
    }
, 3000);


// method 2 : fs.readFile()
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });


// method 3 : setImmediate()

setImmediate(
    () =>{
        console.log('will excute immediately after the current Operation');
    }
);


// method 4 : Promise.then()

const promise = new Promise(
    (resolve, reject) => {

        // excute an async operation
        setTimeout( ()=> {
            resolve('Successfully');
        }, 2500);
    });

 promise.then(
    (result) => {
        console.log(result);
    }
);


// method 5 : .nextTick when operation completed and calling before any callback

process.nextTick(
    () => {
        console.log("this will excute before ny other queue callback");
    }
);
