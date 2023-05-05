// {GET,POST,PUT,Delete} Data to the Server

const http = require('http');
const { URL } = require('url');

let users = [
  // json data
  // { id: 1, name: "IA"},
  // { id: 2, name: "Ahmad"}
];

// config server setting
const server = http.createServer(
  (req, res) => {
    // create url that fetching data (host url , parms...etc)
    const url = new URL(req.url , `http://${req.headers.hostname}`);

    // GET Method
    // localhost:3000/users
    if (req.method === "GET" && url.pathname === '/users'){
      // show specific user by id
      // localhost:3000/users?id=1
      if (url.searchParams.has('id')){
        const id = url.searchParams.get('id'); // 1
        const user = users.find((user) => user.id === id); // { id: 1, name: "IA"},

        if (user){
          res.statusCode = 200;
          res.setHeader('Content-Type' , 'application/json');
          res.end(JSON.stringify(user));
        } else{
          res.statusCode = 404;
          res.setHeader('Content-Type' , 'text/plain');
          res.end('Error : user not found..!');
        }
      }
      else{
        // show all user's
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'application/json');
        res.end(JSON.stringify(users));
      }
    } // end get req method

    // Post Method

    else if (req.method === "POST" && url.pathname === '/users'){
      // add new user
      let body = '';
      req.on('data' ,(data_parms) =>{
        body = body + data_parms.toString();
      });

      req.on('end' ,() =>{
        
        const user = JSON.parse(body);
        user.id = users.length + 1;
        users.push(user);

        res.statusCode = 201; // created succesfully. reqs when create is return true
        res.setHeader('Content-Type' , 'application/json');
        res.end(JSON.stringify(users));
      }); 
    }  
    // end post req method
    // Put Method : update exist user
    else if (req.method === "PUT" && url.pathname === '/users'){
      // check user
      let body = '';
      req.on('data' ,(data_parms) =>{
        body = body + data_parms.toString();
      });

      req.on('end' ,(data_parms) =>{
        
        const user = JSON.parse(body);
        const checkexisting_user = users.findIndex(
         exit_user => checkexisting_user.id = user.id
        );
        
        if (checkexisting_user !== -1){ 
          users[checkexisting_user] = user;
          res.statusCode = 200;
          res.setHeader('Content-Type' , 'application/json');
          res.end(JSON.stringify(user));
        }else{
          res.statusCode = 404;
          res.setHeader('Content-Type' , 'text/plain');
          res.end("Error : User not found");
        }
      }); 
    }// end Put req method

    // Delete Method : Delete exist user
else if (req.method === "DELETE" && url.pathname === '/users'){

  // check if u provided the id of user to delete
  if (url.searchParams.has('id')){
    // localhost:3000/users?id=2
    const id = url.searchParams.get('id'); // delete user which has id equals 2
    const checkexisting_user = users.findIndex(
      exit_user => checkexisting_user.id = user.id
     );

     if (checkexisting_user !== -1){
      users.splice(checkexisting_user, 1);
      res.statusCode = 200;
      res.setHeader('Content-Type' , 'text/plain');
      res.end('User deleted, successfully');
    }else{
      res.statusCode = 404;
      res.setHeader('Content-Type' , 'text/plain');
      res.end("Error : User not found");
    }
    
  }
  // user id required 
  else {
    res.statusCode = 400; // error client and cant return request process
    res.setHeader('Content-Type' , 'text/plain');
    res.end('Error : User ID required');
  }
} // end delete req method
  else {
    // localhost:3000/tester
    res.statusCode = 404; // page removed or, has been moved
    res.setHeader('Content-Type' , 'text/plain');
    res.end('Error : Route not found');
  }

}); 
// end the server setting {Config}


// start server listener
server.listen(3000,()=> {
  console.log('Server is running on port 3000');
  console.log('localhost:3000/users');
})


// to add new user {using console => browser}:

// fetch('http://localhost:3000/users', {
//     method: 'POST',
//     body: JSON.stringify({id:3, name: 'IA'})
// });


// OR


// etch('http://localhost:3000/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({id:2, name: 'Jane Smith'})
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));