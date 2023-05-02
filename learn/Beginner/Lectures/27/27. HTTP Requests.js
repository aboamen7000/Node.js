// HTTP Requests {GET, POST}

// The main difference between a GET request and a POST request is how the data is sent to the server.

// In a GET request, the data is sent in the URL's query string
// example : {https:example.com/food=5}
//  This means that GET requests are usually used for retrieving data from the server,

// while in a POST request, 
// the data is sent in the request body.
// while POST requests are used for sending data to the server to be processed or stored.


// HTTP GET request

// method 1 {GET}:

const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts', 
function(res) {
  
  let data = '';
  res.on('data', function(stored_data){
    data = data + stored_data;
  });

  res.on('end', function(){
    console.log(JSON.parse(data));
  });

  res.on('error', function(error){
    console.log(`Error :`,error);
  });

}
);

///////////////////////////////////

// method 2 {GET req : Specific data for example get only data when the "userId": 1}:

const request = require('request');

const option = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET',
  qs: {
    "userId": 1,
  }
};

request(option, function(error,response,body){

  if(error){
    console.log(`Error : ${error}`);
    return;
  }

  console.log(`Status Code : ${response.statusCode}`);
  console.log(`Body : ${body}`);
} );



// HTTP POST request
const request = require('request');

const option = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'POST',
  json: {
    userId: 1,
    title: 'IA',
    body: 'Ibrahim Body'
  }
};

request(option, function(error,response,body){

  if(error){
    console.log(`Error : ${error}`);
    return;
  }

  console.log(`Status Code : ${response.statusCode}`);
  // console.log(`Body : ${JSON.stringify(body)}`);
  console.log('Body :',body);
} );

// install request globally, save the module as a dependency in your package.json file
npm install -g request --save