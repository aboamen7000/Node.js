// Deep diving into Express App

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

// localhost:8000/users=5
// app.get('/users', 
// function(req, res){
//   res.send('Hello users');
// });

app.get('/:users', 
function(req, res){
  const users = req.params.users;
  res.send(`${users}`);
});

app.get('/user/:id', 
function(req, res){
  const users = req.params.id;
  res.send(`${users}`);
});

app.get('/ia', 
(req, res) =>{
  res.send('Hello ia');
});

app.get('/ahmad', 
(req, res) =>{
  res.send('Hello ahmad');
});

app.get('*', 
(req, res) =>{
  res.send('Hello annonymouse');
});

app.post('/users', (req, res) => {
  res.send('Hello users post');
})


// starting our server and listening on port 8000
app.listen(port, function(){
  console.log(`Server is listening to ${port}`);
  console.log(`localhost:${port}/`); // home page
  console.log(`localhost:${port}/users`); // users page
});