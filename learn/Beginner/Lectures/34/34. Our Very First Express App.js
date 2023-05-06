// Our Very First Express App

// Express :
// is a popular web application framework for Node.js, designed for building web applications
// and APIs. It provides a set of features for web and mobile applications such as routing, middleware,
// templating, error handling, and more. Express is known for its simplicity, flexibility, and ease of use,
// and has a large community of developers contributing to its development and ecosystem of plugins and extensions. 
// Express makes it easy to develop both small and large-scale web applications and has been widely adopted
// by many companies and developers

// importing the express module [npm install express --save]
const express = require('express');

// create an instance of express app
const app = express();

// create static variable as port value..
const port = 8000;

// setting up a route for the home page

// localhost:8000/
app.get('/', 
function(req, res){
  res.send('Hello World from home page');
});

// localhost:8000/users
app.get('/users', 
function(req, res){
  res.send('Hello users');
});

// starting our server and listening on port 8000
app.listen(port, function(){
  console.log(`Server is listening to ${port}`);
  console.log(`localhost:${port}/`); // home page
  console.log(`localhost:${port}/users`); // users page
});