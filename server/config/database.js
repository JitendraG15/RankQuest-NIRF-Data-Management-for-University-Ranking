const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }).then(()=>{console.log("DB Connection Successfull")})
    .catch((err)=>{
        console.log(err);
        console.error(err);
        process.exit(1);
    })
}