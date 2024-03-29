const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
   departmentID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Department",
   //  required:true
   },
   programCode:{
    type:String,
   //  required:true
   },
   programName:{
    type:String
   },
   programType:{
    type:String,
   //  required:true,
    enum:["UG","PG","Diploma", "Ph.D"],
    default:"UG"
   },
   description:{
    type:String
   },
   duration:{
    type:Number,
   //  required:true

   },
   seats:{
    type:Number,
   //  required:true
   },
   courses:[
       {
         type:mongoose.Schema.Types.ObjectId,
         ref:"Course"
       }
   ],
   syllabus:{
    type:String
   },
   enrolledStudents:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Student"
   }],
   yearOffered:{
    type:Date
   //  required:true
   }
});

module.exports = mongoose.model("Program", programSchema);