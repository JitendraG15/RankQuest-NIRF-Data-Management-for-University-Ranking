// const { data } = require('autoprefixer');
// const { error } = require('console');
const fs = require('fs');
fs.readFile('./hello.txt', (err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data)
})