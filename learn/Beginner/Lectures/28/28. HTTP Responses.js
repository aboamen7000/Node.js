// HTTP Responses

const http = require('http');

const server = http.createServer(
  (resquesto,respondo) => {


    // set the respnd status code and headers
    resquesto.writeHead(
      200,
      {'Content-Type': 'text/plain'}
    );

    // write the respond body
    resquesto.write("Hello, from ia responder..!");

    // end the respond
    resquesto.end();
  }
);

// server listener

server.listen(3000,
  function() {
    console.log('Server listening on port 3000');
  });


// run nodemon on this server, to up to data with every update code
// nodemon test.js