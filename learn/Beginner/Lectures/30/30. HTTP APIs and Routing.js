// HTTP APIs and Routing


// method 1 : simple HTTP API
const http = require('http');

const server = http.createServer((req, res) => {
  // Set CORS headers to allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  // method is used by the browser to check the allowed methods before making a request. 
  // The GET method is used to retrieve data from the server
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  // localhost:3000/start
  if (req.url === '/start') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Starting!');
    return;
  }

  if (req.url === '/end') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Ending!');
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

// - server: the server instance (listener)
server.listen(3000, function(){
  console.log('Server running at http://localhost:3000/');
});


// method 2 : Creating an HTTP API with routing
const http = require('http');

const server = http.createServer(
  (req, res) => {
    // parse url
    const url = new URL(req.url, `http://${req.headers.host}`);

    // Routing 
    // localhost:3000
    if (url.pathname === '/'){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello from main page');
    }
    else if(url.pathname === '/about'){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello from about page');
    }
    else if (url.pathname === '/contact') {
      if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(
          '<form action="/contact" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
        );
      } else if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body = body + chunk.toString();
        });
        req.on('end', () => {
          const msg = new URLSearchParams(body).get('message');
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(`<h1>Message sent to: ${msg}</h1>`);
        });
      }
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('<h5>Not found</h5>');
    }

  });


  server.listen(3000, function(){
    console.log('server starting');
    console.log('localhost:3000');
  });
