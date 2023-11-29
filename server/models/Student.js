const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNumber: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Others"],
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  motherName: {
    type: String,
    required: true,
  },
  guardianName: {
    type: String,
    required: true,
  },
  actualCategory: {
    type: String,
    required: true,
  },
  admittedCategory: {
    type: String,
    required: true,
  },
  isEconomicallyAndSocialyChallenged: {
    type: Boolean,
    required: true,
  },
  isPhysicallyChallenged: {
    type: Boolean,
    required: true,
    default: NA,
  },
  familyIncome: {
    type: Number,
    required: true,
  },
  isGettingFeeReimbursement: {
    type: Boolean,
  },
  reimbursementBody: {
    type: String,
  },
  enrolledProgram: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "EnrolledProgram",
  },
  placementDetails: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "PlacementDetail",
  },
  admissionDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EnrollmentDetail",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  guardianContactNumber: {
    type: Number,
    required: true,
  },
  emergencyContactPerson: {
    type: String,
    required: true,
  },
  emergencyContactNumber: {
    type: Number,
    required: true,
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
