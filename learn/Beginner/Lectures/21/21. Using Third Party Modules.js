// Using Third Party Modules :axios (http request) {npm install axios}

const axios = require('axios');

axios.get("https://jsonplaceholder.typicode.com/posts/1")
.then(
    function(respond) {
        console.log(respond);
    })
    .catch(error => {
        console.log(`the error is : ${error}`);
    })
    .then(
        () => {
            console.log("Finished...!");
        }
        
    )
    