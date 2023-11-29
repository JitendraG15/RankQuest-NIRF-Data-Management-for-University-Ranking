const mongoose = require("mongoose");


const schoolSchema = new mongoose.Schema({
  universityID:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  },
  schoolName:{
    type:String,
    required:true
  },
  description:{
    type:String,
  },
  dean:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"TeachingFaculty"
  },
  departments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Department",
    required:true
  }],
  facultyMembers:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"TeachingFaculty",
      required:true
  }]
});

module.exports = mongoose.model("School", schoolSchema);