// What is a Web Server

// A web server using Node.js is a software application that runs on a Node.js runtime environment 
// and accepts HTTP requests from clients, such as web browsers or other HTTP clients, 
// and returns HTTP responses with data, typically in the form of HTML, CSS, and JavaScript files.

// Node.js provides a built-in HTTP module that makes it easy to create a web server. By using the http module, 
// you can create a server that listens for incoming HTTP requests and sends back responses.

// Here's an example of how to create a simple web server using Node.js:

const http = require('http');
const port = 8080;

const server = http.createServer(

  function(req,res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello , its ia.....!');
  });

  server.listen(
    port,
    function() {
      console.log('Server listening on port', port);
      // console.log('Server listening on port ' + port);
      // console.log(`Server listening on port ${port}`);
    }
  )


 // to test go to web and paste this link :
 // http://localhost:8080/