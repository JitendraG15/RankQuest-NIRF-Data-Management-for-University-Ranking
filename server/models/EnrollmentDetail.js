const mongoose = require("mongoose");

const enrollmentDetailSchema = new mongoose.Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "Student",
  },
  enrollmentDate: {
    type: Date,
    // required: true,
  },
  enrollmentTerm: {
    type: Number,
    // required: true,
  },
  entranceTestName: {
    type: String,
  },
  entranceTestRegistrationNumber: {
    type: String,
    // required: true,
  },
  entranceTestRollNumber: {
    type: String,
    // required: true,
  },
  entranceTestTotalMarks: {
    type: Number,
    // required: true,
  },
  entranceTestObtainedMarks: {
    type: Number,
    // required: true,
  },
  qualification: {
    type: String,
    // required: true,
  },
  appliedProgrammes: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("EnrollmentDetail", enrollmentDetailSchema);
