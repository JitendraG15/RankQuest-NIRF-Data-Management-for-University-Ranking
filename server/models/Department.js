const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
   schoolID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"School",
    required:true
   },
   departmentName:{
    type:String,
    required:true
   },
   hod:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"TeachingFaculty"
   },
   programs:[{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Program"
   }],

   abbreviation:{
    type:String
   },
   facultyMembers:[{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"TeachingFaculty"
   }],
   advisors:[
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"TeachingFaculty"
    }
   ],
   budgetAndFunding:{
    type:Number
   },
   externalPartnerships:[{
    type:String
   }],
   studentOrganizations:[{
    type:mongoose.Schema.Types.ObjectId
   }],
   facilities:[{
    type:String
   }],
   email:{
    type:String,
    required:true
   },
   phoneNumber:{
    type:Number
   },
   
});

module.exports = mongoose.model("Department", departmentSchema);