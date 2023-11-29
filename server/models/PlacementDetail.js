const mongoose = require("mongoose");

const placementDetailSchema = new mongoose.Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  employer: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  companyLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  supervisor: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  salary: {
    type: Number,
  },
  linkedInProfile: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PlacementDetail", placementDetailSchema);
