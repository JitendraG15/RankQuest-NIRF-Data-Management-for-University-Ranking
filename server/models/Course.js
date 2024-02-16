const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  courseCredit: {
    type: String,
    required: true,
  },
  programID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
  },
  semesterNumber: {
    type: String,
  },
  instructor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
    },
  ],
});

module.exports = mongoose.model("Course", courseSchema);
