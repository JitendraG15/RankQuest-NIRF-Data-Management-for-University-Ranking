const mongoose = require("mongoose");

const internshipDetailSchema = new mongoose.Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    // required: true,
  },
  employer: {
    type: String,
    // required: true,
  },
  jobTitle: {
    type: String,
    // required: true,
  },
  joiningDate: {
    type: Date,
    // required: true,
  },
  companyLocation: {
   type:String
  },
  supervisor: {
    type: String,
  },
  description: {
    type: String,
  },
  stipendPerMonth: {
    type: Number,
  },
  linkedInProfile: {
    type: String,
    // required: true,
  },
  durationInMonth: {
    type: Number,
    // required: true,
  },
  mode: {
    type: String,
    enum: ["Remote", "Hybrid", "Onsite"],
  },
});

module.exports = mongoose.model("InternshipDetail", internshipDetailSchema);
