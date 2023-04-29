// EventEmitter

const EventEmitter = require('events');

class my_event_emitter extends EventEmitter {}

const MY_Emitter = new my_event_emitter();


// add event listener
MY_Emitter.on("IA", function(name) {
    // console.log("Hello", name);
    console.log(`Hello ${name}`);
});

MY_Emitter.on('IA older', function(result){
    if (result === "older"){
        console.log(`yes ia : ${result}`);
    }

    if (result === "younger"){
        console.log(`yes ia : ${result}`);
    }

});

MY_Emitter.on('Ahmad older', function(result){
    if (result === "older"){
        console.log(`yes Ahmad : ${result}`);
    }

    if (result === "younger"){
        console.log(`yes Ahmad : ${result}`);
    }
});

process.on('exit', (code)=>{
    console.log("The Program exit and the code is :" , code);
});


// emit the event
MY_Emitter.emit("IA", "Amen");
MY_Emitter.emit("IA older", "older");
// MY_Emitter.emit("IA older", "fat");
MY_Emitter.emit("Ahmad older", "younger");