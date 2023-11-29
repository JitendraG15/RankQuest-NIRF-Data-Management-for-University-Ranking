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
    chancellor:{
        type:String,
        required:true
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
    teachingFaculties:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"TeachingFaculty"
    }],
    nonTeachingFaculties:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"NonTeachingFaculty"
    }],
    addesses:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    }],
    website:{
        type:mongoose.Schema.Types.ObjectId
    },
    logo:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    socialMediaLinks:[{
        type:String,
    }],
    languages:[{
        type:String,
    }],
    studentOrganizations:{
        type:mongoose.Schema.Types.ObjectId,

    }


})

module.exports = mongoose.model("University", universitySchema);