const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    // required: true,
    enum: ["Male", "Female", "Others"],
  },
  dateOfBirth: {
    type: Date,
    // required: true,
  },
  fatherName: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
  },
  motherName: {
    type: String,
    // required: true,
  },
  guardianName: {
    type: String,
    // required: true,
  },
  actualCategory: {
    type: String,
    // required: true,
    enum: ["General", "OBC-NCL", "SC", "ST"],
  },
  admittedCategory: {
    type: String,
    // required: true,
  },
  isEconomicallyAndSocialyChallenged: {
    type: Boolean,
    // required: true,
  },
  isPhysicallyChallenged: {
    type: Boolean,
    // required: true,
    // default: "False",
  },
  familyIncome: {
    type: Number,
    // required: true,
  },
  isGettingFeeReimbursement: {
    type: Boolean,
  },
  reimbursementBody: {
    type: String,
  },
  enrolledProgram: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "EnrolledProgram",
  },
  internshipDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InternshipDetail",
  },
  placementDetails: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "PlacementDetail",
  },
  admissionDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EnrollmentDetail",
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  phoneNumber: {
    type: Number,
    // required: true,
  },
  role: {
    type: String,
    enum: ["Student"],
    default: "Student",
  },
  approved: {
    type: String,
    enum: ["approved", "rejected", "draft"],
    default: "draft",
  },
  password: {
    type: String,
  },
  guardianContactNumber: {
    type: Number,
    // required: true,
  },
  emergencyContactPerson: {
    type: String,
    // required: true,
  },
  emergencyContactNumber: {
    type: Number,
  },
  batch: {
    type: String,
  },
  session: {
    type: String,
  },
  semester: {
    type: String,
    enum: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"],
    // required: true,
    default:"I"
  },

  city: {
    type: String,
  },
  state: { type: String },
  country: { type: String, default: "India" },
  enrollmentYear: {
    type: Number,
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      // required: true,
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
