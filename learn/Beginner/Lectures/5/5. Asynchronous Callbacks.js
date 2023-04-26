// Asynchronous Callbacks


function sum (num1,num2,callback){
    setTimeout(
        ()=> {
           const resu = num1 + num2;
           callback(resu);
        }, 2000
    )
}


function consol_log(result)
{
    console.log(`The result is : ${result}`)
}

sum(5,8,consol_log);
console.log("This message will show immediately, before the call of sum function");