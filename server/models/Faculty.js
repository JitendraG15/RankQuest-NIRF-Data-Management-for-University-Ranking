const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  facultyID: {
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
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    // required: true,
  },
  designation: {
    type: String,
    enum: ["Assistant Professor", "Associate Professor"],
  },
  employmentType: {
    type: String,
    enum: ["Regular", "Contract", "Part-Time"],
  },
  role: {
    type: String,
    enum: [
      "Faculty",
      "Teaching Faculty",
      "Non-Teaching Faculty",
      "HOD",
      "DEAN",
      "Class Incharge",
      "Registrar",
      "Finance Officer",
      "Controller of Examination",
      "Chief Vigilance Officer",
      "Medical Officer",
      "Admin",
      "Researcher",
    ],
    default: "Faculty",
  },
  approved: {
    type: String,
    enum: ["approved", "rejected", "draft"],
    default: "draft",
  },
  password: {
    type: String,
  },
  salary: {
    type: Number,
  },
  officeLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    // required: true,
  },
  officeHours: {
    type: String,
  },
  highestQualification: {
    type: String,
    enum: ["Ph.D", "PG", "UG", "Diploma"],
  },
  degreeName: {
    type: String,
  },

  experienceInMonth: {
    type: Number,
  },
  isCurrentlyWorking: {
    type: Boolean,
    default: true,
  },
  joiningDate: {
    type: Date,
  },
  leavingDate: {
    type: Date,
    // default:"NA"
  },
  associationType: {
    type: String,
    enum: ["Regular", "Contract"],
  },
  researchFields: [
    {
      type: String,
    },
  ],
  publications: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publication",
  },
  consultancyProjects: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  teachingPhilosophy: {
    type: String,
  },
  city: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
    default: "India",
  },
  pinCode: {
    type: Number,
  },

  emergencyContactPerson: {
    type: String,
    // required: true,
  },
  emergencyContactNumber: {
    type: Number,
    // required: true,
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      // required: true,
    },
  ],
});

module.exports = mongoose.model("Faculty", facultySchema);
