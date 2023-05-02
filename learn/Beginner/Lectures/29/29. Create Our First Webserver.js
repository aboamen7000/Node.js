// Create Our First Webserver

// import http/fs/path
const http = require('http');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

// const port = 3000;
const port = process.env.port;

// create our server
const server = http.createServer(
  (requesto,repsondo) => {

  console.log(`Request method : ${requesto.method}\nRequest url : ${requesto.url}`);

  // Routing : localhost:3000/
  if (requesto.url === '/')
  {
    // Server the index.html file
    // __dirname : represent the directory name of currently module
    const file_path = path.join(__dirname, 'public', 'index.html');

    fs.readFile(file_path, (err, data) => {
      if (err) {
        repsondo.writeHead(500, {'Conent-Type': 'text/plain'});
        repsondo.end(`Error loading file : ${err}`);
      } else{
        repsondo.writeHeader(200, {'Conent-Type': 'text/html'});
        repsondo.end(data);
      }

  });

  } 
  // Routing : localhost:3000/about
  else if (requesto.url === '/about') {

    // Server the about.html file
    // __dirname : represent the directory name of currently module
    const file_path = path.join(__dirname, 'public', 'about.html');

    fs.readFile(file_path, (err, data) => {
      if (err) {
        repsondo.writeHead(500, {'Conent-Type': 'text/plain'});
        repsondo.end(`Error loading file : ${err}`);
      } else{
        repsondo.writeHeader(200, {'Conent-Type': 'text/html'});
        repsondo.end(data);
      }

  });


  }
// Routing : localhost:3000/asdasg / asdjhaksdhasjkdh {any routing else} => Error
// Server a 404 error page
else{
  repsondo.writeHead(404, {'Conent-Type': 'text/plain'});
  repsondo.end('404 Not found Resource');
}


});


// server listener
server.listen(port,
  ()=> {
    console.log(`Server listen to port ${port}`);
    console.log(`localhost:${port}`);
  }
  );