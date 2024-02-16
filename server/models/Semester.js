const mongoose = require("mongoose");

//Semester Schema
const semesterSchema = new mongoose.Schema({
  semesterName: {
    type: String,
    enum: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"],
    required: true,
  },
  academicSession: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  programName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
  },

  enrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

module.exports = mongoose.model("Semester", semesterSchema);
