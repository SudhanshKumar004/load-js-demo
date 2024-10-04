setTimeout(run,3000);

function run()
{
    console.log("called");
}

setTimeout(()=>{
    console.log("second time called");
},5000)