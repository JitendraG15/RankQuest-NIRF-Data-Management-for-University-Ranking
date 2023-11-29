const mongoose = require("mongoose");

const enrolledProgramSchema = new mongoose.Schema({
  programID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
    required: true,
  },
  admissionDate: {
    type: Date,
    required: true,
  },
  completionYear: {
    type: Date,
  },
  isCompletedInStipulatedTime: {
    type: Boolean,
  },
});

module.exports = mongoose.model("EnrolledProgram", enrolledProgramSchema);
