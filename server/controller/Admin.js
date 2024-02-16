const Student = require("../models/Student");
const OTP = require("../models/OTP");
const bcrypt = require("bcrypt");
const mailSender = require("../utils/mailSender");
const Faculty = require("../models/Faculty");
const jwt = require("jsonwebtoken");
// const Department = require("../models/Department");
const EnrolledProgram = require("../models/EnrolledProgram");
const EnrollmentDetail = require("../models/EnrollmentDetail");
const InternshipDetail = require("../models/InternshipDetail");
const PlacementDetail = require("../models/PlacementDetail");
const Program = require("../models/Program");
const Address = require("../models/Address");

// 1.Signup For Student
exports.addStudent = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      name,
      rollNumber,
      email,
      gender,
      actualCategory,
      state,
      city,
      country,
      isEconomicallyAndSocialyChallenged,
      isGettingFeeReimbursement,
      isCompletedInStipulatedTime,
      enrollmentYear,
    } = req.body;
    // Check if All Details are there or not
    if (
      !name ||
      !rollNumber ||
      !email ||
      !gender ||
      !actualCategory ||
      !state ||
      !city ||
      !country ||
      !enrollmentYear
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
        name,
        rollNumber,
        email,
        gender,
        actualCategory,
        state,
        city,
        country,
        isEconomicallyAndSocialyChallenged,
        isGettingFeeReimbursement,
        isCompletedInStipulatedTime,
        enrollmentYear,
      });
    }

    // Check if user already exists
    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(rollNumber, 10);

    const program = await EnrolledProgram.create({});
    const enrollment = await EnrollmentDetail.create({});
    const internship = await InternshipDetail.create({});
    const placement = await PlacementDetail.create({});
    const address = await Address.create({});

    const student = await Student.create({
      name: name,
      rollNumber: rollNumber,
      email: email,
      password: hashedPassword,
      gender: gender,
      fatherName: "",
      age: "",
      motherName: "",
      guardianName: "",
      actualCategory: actualCategory,
      admittedCategory: "",
      isEconomicallyAndSocialyChallenged: isEconomicallyAndSocialyChallenged,
      isPhysicallyChallenged: false,
      familyIncome: 0,
      isGettingFeeReimbursement: isGettingFeeReimbursement,
      reimbursementBody: "",
      enrolledProgram: program._id,
      internshipDetails: internship._id,
      placementDetails: placement._id,
      admissionDetails: enrollment._id,
      guardianContactNumber: "",
      emergencyContactPerson: "",
      emergencyContactNumber: "",
    });

    return res.status(200).json({
      success: true,
      student,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

// 2.Signup For Faculty
exports.addFaculty = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      name,
      facultyID,
      email,
      gender,
      state,
      country,
      highestQualification,
      experienceInMonth,
      employmentType,
      role,
      designation,
    } = req.body;
    // Check if All Details are there or not
    if (
      !name ||
      !facultyID ||
      !email ||
      !gender ||
      !state ||
      !country ||
      !highestQualification ||
      !experienceInMonth ||
      !employmentType ||
      !role ||
      !designation
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await Faculty.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(facultyID, 10);

    const faculty = await Faculty.create({
      name,
      facultyID,
      email,
      gender,
      state,
      country,
      highestQualification,
      experienceInMonth,
      employmentType,
      role,
      designation,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      faculty,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

// Get Teaching Faculty
exports.getAllTeachingFaculty = async (req, res) => {
  try {
    const faculties = await Faculty.find({
      designation: { $in: ["Assistant Professor", "Associate Professor"] },
    });

    return res.status(200).json({
      success: true,
      message: "Faculty Profile Fetched Successfully",
      faculties,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unknown Error While Fetching Teaching Faculty",
    });
  }
};

// Get Teaching Faculty
exports.getFaculty = async (req, res) => {
  try {
    // const objectId = mongoose.Types.ObjectId(stringId);
    const { id } = req.body;
    const faculty = await Faculty.findById(id);

    return res.status(200).json({
      success: true,
      message: "Faculty Profile Fetched Successfully",
      faculty,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unknown Error While Fetching Faculty Profile",
    });
  }
};

// Delete Faculty Account
exports.deleteFaculty = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("ID:", userId);

    if (!userId) {
      return res.status(400).json({
        succes: false,
        message: "Faculty ID is Required",
      });
    }

    const faculty = await Faculty.findByIdAndDelete(userId);

    return res.status(200).json({
      succes: true,
      message: "Faculty Profile Deleted Successfully",
      faculty,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      succes: false,
      message: "Error While Deleting Faculty Account",
      id: req.body.id,
    });
  }
};

// Get All Students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    if (!students) {
      return res.status(401).json({
        success: false,
        message: "No Student Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "All Students Data Fetched Successfully",
      students,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unknown Error While Fetching All Student Data",
    });
  }
};

// Get UG Student
exports.getUGStudent = async (req, res) => {
  try {
    const students = await Student.find({
      enrolledProgram: {
        $in: await EnrolledProgram.find({
          programID: {
            $in: await Program.find({
              programType: "UG",
            }).distinct("_id"),
          },
        }).distinct("_id"),
      },
    });

    if (!students) {
      return res.status(401).json({
        success: false,
        message: "No Student Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "UG Student Data Fetched Successfully",
      students,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unknown Error While Fetching UG Student Data",
    });
  }
};

// Get PG Student
exports.getPGStudent = async (req, res) => {
  try {
    const students = await Student.find({
      enrolledProgram: {
        $in: await EnrolledProgram.find({
          programID: {
            $in: await Program.find({
              programType: "PG",
            }).distinct("_id"),
          },
        }).distinct("_id"),
      },
    });

    if (!students) {
      return res.status(401).json({
        success: false,
        message: "No Student Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "PG Student Data Fetched Successfully",
      students,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unknown Error While Fetching PG Student Data",
    });
  }
};

// Get PhD Student
exports.getPhDStudent = async (req, res) => {
  try {
    const students = await Student.find({
      enrolledProgram: {
        $in: await EnrolledProgram.find({
          programID: {
            $in: await Program.find({
              programType: "Ph.D",
            }).distinct("_id"),
          },
        }).distinct("_id"),
      },
    });

    if (!students) {
      return res.status(401).json({
        success: false,
        message: "No Student Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Ph.D Student Data Fetched Successfully",
      students,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unknown Error While Fetching Ph.D Student Data",
    });
  }
};

// Get Diploma Student
exports.getDiplomaStudent = async (req, res) => {
  try {
    const students = await Student.find({
      enrolledProgram: {
        $in: await EnrolledProgram.find({
          programID: {
            $in: await Program.find({
              programType: "Diploma",
            }).distinct("_id"),
          },
        }).distinct("_id"),
      },
    });

    if (!students) {
      return res.status(401).json({
        success: false,
        message: "No Student Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Diploma Student Data Fetched Successfully",
      students,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unknown Error While Fetching Diploma Student Data",
    });
  }
};

// Get Student Profile
exports.getStudentProfile = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("Student ID:", id);

    const student = await Student.findById(id)
      .populate({
        path: "enrolledProgram",
        populate: {
          path: "programID",
        },
      })
      .populate("addresses")
      .exec();

    if (!student) {
      return res.status(401).json({
        succes: false,
        message: "Student Not Found",
      });
    }

    return res.status(200).json({
      succes: true,
      message: "Student Profile Fetched Successfully",
      student,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "",
    });
  }
};

// Get Particular Student
exports.getParticularStudent = async (req, res) => {
  try {
    const { programID} = req.query.programID;
    const { semester} = req.query.semester;
    console.log("ProgramID:", programID);
    console.log("Semester:", semester);

    const students = await Student.find()
      .populate({
        path: "enrolledProgram",
        populate: {
          path: "programID",
        },
      })
      .populate("addresses")
      .exec();

    if (!students) {
      return res.status(401).json({
        succes: false,
        message: "Student Not Found",
      });
    }

    return res.status(200).json({
      succes: true,
      message: "Student Record Fetched Successfully",
      students,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error While Fetching Student",
    });
  }
};


exports.insertStudentsInBulk = async (req, res) => {
  try {
    const { students } = req.body;
    console.log("Students:", students);

    const headers = students[0]; // Assuming the first row contains headers

    students.slice(1).forEach(async (element) => {
      const studentData = {};
      headers.forEach((header, index) => {
        studentData[header] = element[index];
      });

      // const internship =

      const enrolledP = await EnrolledProgram.create({});

      try {
        // Insert student data into the database
        await Student.create(studentData);
      } catch (error) {
        console.error("Error inserting student data:", error);
        return res.status(500).json({
          success: false,
          message: "Error occurred while inserting student data",
        });
      }
    });

    return res.status(200).json({
      success: true,
      message: "Students data inserted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error occurred while processing students data",
    });
  }
};

exports.insertFacultyInBulk = async (req, res) => {
  try {
    const { faculties } = req.body;
    console.log("Faculties:", faculties);

    const headers = faculties[0]; // Assuming the first row contains headers

    faculties.slice(1).forEach(async (element) => {
      const facultyData = {};
      headers.forEach((header, index) => {
        facultyData[header] = element[index];
      });

      

      try {
        // Insert student data into the database
        await Faculty.create(facultyData);
      } catch (error) {
        console.error("Error inserting Faculty Record:", error);
        return res.status(500).json({
          success: false,
          message: "Error occurred while inserting Faculty Record",
        });
      }
    });

    return res.status(200).json({
      success: true,
      message: "Faculty Record Inserted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error occurred while processing Faculty data",
    });
  }
};

// Delete STUDENT Account
exports.deleteStudent = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("ID:", userId);

    if (!userId) {
      return res.status(400).json({
        succes: false,
        message: "Student ID is Required",
      });
    }

    const faculty = await Student.findByIdAndDelete(userId);

    return res.status(200).json({
      succes: true,
      message: "Faculty Profile Deleted Successfully",
      faculty,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      succes: false,
      message: "Error While Deleting Student Account",
    });
  }
};

// Delete all STUDENTs
exports.deleteAllStudent = async (req, res) => {
  try {
    const students = await Student.find();

    students.forEach(async (element) => {
      try {
        // Insert student data into the database
        await Student.findByIdAndDelete(element._id);
      } catch (error) {
        console.error("Error deleting students:", error);
        return res.status(500).json({
          success: false,
          message: "Error occurred while deleting student",
        });
      }
    });

    return res.status(200).json({
      succes: true,
      message: "All Students Deleted Successfully",
      students,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      succes: false,
      message: "Error While Deleting Students",
    });
  }
};
