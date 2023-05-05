// Parameterized URLs

const http = require('http');

// server config
const server = http.createServer(
  (req,res) => {
//localhost/users?id=55
    const url = new URL(req.url, `http://${req.headers.host}`);


    if (url.pathname === '/users') {
      if (url.searchParams.has('id') && url.searchParams.has('name')){
        // true => boolean
        const id = url.searchParams.get('id');
        const name = url.searchParams.get('name');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // res.write(JSON.stringify({id: id}));
        res.write(`{ "ID": ${id}, "name": "${name}" }`);
        res.end();
      }
      else{
        //localhost/users?test=55
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/plain');
        // res.end(`Invalid URL: ${req.url}`);
        res.end('Invalid User id required');
      }
    }else{
      //localhost/tester?test=55
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/plain');

      res.end('Invalid : Route not found');
    }
  });

// server listener
server.listen(4500, function(){
  console.log('Server listening on port 4500');
  console.log('localhost:4500/users?id=1&name=IA');
});


// result
//____ //
// http://localhost:4500/users?id=1&name=IA

//{
//  "ID": 1,
//  "name": "IA"
//}