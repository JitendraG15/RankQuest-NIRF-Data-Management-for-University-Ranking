const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
    universityName:{
        type:String,
        required:true
    },
    foundedYear:{
        type:String,
        required:true
    },
    motto:{
        type:String,
    },
    description:{
        type:String,
    },
    affiliationType:{
        type:String,
        required:true,
        enum:["UGC","Central Government",  "State Government"]
    },
    accredition:{
        type:String,
    },
   
    viceChancellor:{
        type:String,
        required:true
    },
    proViceChancellor:{
        type:String,
        required:true
    },
    schools:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"School"
    }],
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Student"
    }],
    Faculties:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Faculty"
    }],
    addesses:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    }],
    website:{
        type:String
    },
    logo:{
        type:String
    },
    email:{
        type:String,
        // required:true
    },
    phoneNumber:{
        type:Number,
        // required:true
    },
    socialMediaLinks:[{
        type:String,
    }],
    languages:[{
        type:String,
    }]

})

module.exports = mongoose.model("University", universitySchema);