// Making HTTP Requests
const http = require('https');

const req = http.request("https://www.google.com/", function(res){
    let data = '';
    res.on('data', (dato)=>{
        data += dato;
    });
    res.on('end', ()=>{
        console.log(data);
    });
}).on('error', (err)=>{
    console.log('Error :', err.message);
});

req.end();