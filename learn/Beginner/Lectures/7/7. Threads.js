// threads

const { Worker } = require('worker_threads');

function run_server(worker_data){


    return new Promise( (resolve, reject)=>{

        const worker = new Worker(
            `const { parentPort } = require('worker_threads');
            parentPort.postMessage(worker_data);`, {worker_data}
        );


        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code)=>{

            if (code !== 0){
                reject(new Error(`Worker Stoped with exit code is : ${code}`))
            }
        });

    });
}


async function run(){
   const result = await run_server("Hello, im starting the server");
   console.log(result);
}

// try{
//     run();
// }
// catch (e)
// {
//     console.log(e);
// }

run().catch(e => console.log(e));