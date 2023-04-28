// Phases of the Event Loop

// progress 1 : timers

setTimeout(
    () => {
        console.log('this message will printed after 2 sec');
    }, 2000);

// progress 2 : i/o callbacks ()=> input/output
const fs = require('fs');
fs.readFile('data.txt', 'utf8' , (err,data) => {
    // if(err){
    //     console.log(err);
    // }
    if (err) throw err;
    console.log(data);
});

// progress 3 : setImmediate : will show immediately before any call back
setImmediate(
    () => {
        console.log('this message will show immediately before any call back');
    }
);

// progress 4 : closing the callback
const http = require('http');
const server = http.createServer(
    (req,res) =>{
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello, this from ia as respond from the server');
    });

const port = 3000;
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});