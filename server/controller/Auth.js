const Student = require("../models/Student");
const OTP = require("../models/OTP");
const bcrypt = require("bcrypt");
const mailSender = require("../utils/mailSender");
const Faculty = require("../models/Faculty");
const jwt = require("jsonwebtoken")
// const Department = require("../models/Department");
const EnrolledProgram = require("../models/EnrolledProgram");
const EnrollmentDetail = require("../models/EnrollmentDetail");
const InternshipDetail = require("../models/InternshipDetail");
const PlacementDetail = require("../models/PlacementDetail");
const Program = require("../models/Program");
const Address = require("../models/Address");


// Dummy API
exports.getList = async (req, res) => {
  try {
    const data = {
      name: "Jitendra Gupta",
      course: "BTech CSE",
      semester: "7",
      State: "Uttar Pradesh",
    };

    return res.status(200).json({
      success: true,
      data,
      message: "List Data Fetched successfully",
    });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error occured while fetching list",
    });
  }
};
// General Authentication API's

// 1.Signup For Student
exports.signupStudent = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {name,rollNumber, email,mobile,password,confirmPassword,otp,} = req.body;
    // Check if All Details are there or not
    if (!name ||!rollNumber ||!email ||!password ||!confirmPassword  ||!mobile ||!otp) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match",
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

    // Find the most recent OTP for the email
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log(response);
    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // // Create the user
    // let approved = "";
    // approved === "Instructor" ? (approved = false) : (approved = true);
    const program = await EnrolledProgram.create({});
    const enrollment =  await EnrollmentDetail.create({});
   const internship =  await InternshipDetail.create({});
   const placement = await PlacementDetail.create({});
  //  const progr await Program.create({});
  //  const address = await Address.create({});


    
    const student = await Student.create({
        name:name,
        rollNumber:rollNumber,
        // dateOfBirth:dob,
        email:email,
        phoneNumber:mobile,
        password: hashedPassword,
        gender:"Male",
        fatherName:"",
        age:"",
        motherName:"",
        guardianName:"",
        // actualCategory:"",
        // admittedCategory:"",
        isEconomicallyAndSocialyChallenged:false,
        isPhysicallyChallenged:false,
        familyIncome:0,
        isGettingFeeReimbursement:false,
        reimbursementBody:"",
        enrolledProgram:program._id,
        internshipDetails:internship._id,
        placementDetails:placement._id,
        admissionDetails:enrollment._id,
        guardianContactNumber:"",
        emergencyContactPerson:"",
        emergencyContactNumber:"",
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
exports.signupFaculty = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      name,
      facultyId,
      dob,
      email,
      mobile,
      password,
      confirmPassword,
      otp,
    } = req.body;
    // Check if All Details are there or not
    if (
      !name ||
      !facultyId ||
      !email ||
      !password ||
      !confirmPassword ||
      !dob ||
      !mobile ||
      !otp
      
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match",
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

    // Find the most recent OTP for the email
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log(response);
    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // // Create the user
    // let approved = "";
    // approved === "Instructor" ? (approved = false) : (approved = true);

    
    const student = await Faculty.create({
        name:name,
        facultyID:facultyId,
        dateOfBirth:dob,
        email:email,
        phoneNumber:mobile,
      password: hashedPassword,
    //   accountType: accountType,
    //   approved: approved,
    //   additionalDetails: profileDetails._id,
    //   image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
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

// 3.Login for Student
exports.loginStudent = async (req, res) => {
  try{
    const {email, password} = req.body;
    console.log("Email->", email, "Password->", password);
    // Check if email or password is missing
    if (!email || !password) {
      // Return 400 Bad Request status code with error message
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      })
    }

    // Find user with provided email
    // const user = await Student.findOne({email});
    const user = await Student.findOne({email})
    .populate("addresses")
    .populate("admissionDetails")
    .populate("placementDetails")
    .populate("internshipDetails")
    .populate("enrolledProgram")
    .exec();

  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User is not Registered with Us Please SignUp to Continue`,
    });
  }
    console.log("Student:", user);
   

    // Generate JWT token and Compare Password
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      )

      // Save token to user document in database
      user.token = token
      user.password = undefined
      // Set cookie for token and return success response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }
      return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      })
    }

  }catch(error){
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Unknown Error Occured While Student Login"
    })
  }
}

// 4. Login For Faculty
exports.loginFaculty = async (req, res) => {
  try{
    const {email, password} = req.body;
    console.log("Email->", email, "Password->", password);
    // Check if email or password is missing
    if (!email || !password) {
      // Return 400 Bad Request status code with error message
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      })
    }

    // Find user with provided email
    const user = await Faculty.findOne({ email });
    console.log("Faculty:", user);
    // If user not found with provided email
    if (!user) {
      // Return 401 Unauthorized status code with error message
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      })
    }

    // Generate JWT token and Compare Password
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      )

      // Save token to user document in database
      user.token = token
      user.password = undefined
      // Set cookie for token and return success response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      })
    }

  }catch(error){
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Unknown Error Occured While Student Login"
    })
  }
}

// 5. Change Password for student
exports.changeStudentPassword = async (req, res)=>{
  try{
    const {id} = req.user;
    const {oldPassword, newPassword} = req.body;

    const student = await Student.findById(id);

    if(await bcrypt.compare(oldPassword, student.password)){

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await Student.findByIdAndUpdate({_id:id}, {
        password:hashedPassword
      }, {new:true})

      return res.status(200).json({
        success:true,
        message:"Student Password Changed Successfully",
        student
      })
    }

    return res.status(400).json({
      success:false,
      message:"Wrong Old Password"
    })


  }catch(error){
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Error Occured while changing Student Password"
    })
  }
}


// 5. Change Password for Faculty
exports.changeFacultyPassword = async (req, res)=>{
  try{
    const {id} = req.user;
    const {oldPassword, newPassword} = req.body;

    const faculty = await Faculty.findById(id);

    if(await bcrypt.compare(oldPassword, faculty.password)){
     const hashedPassword= await bcrypt.hash(newPassword, 10);

     await Faculty.findByIdAndUpdate({_id:id}, {
      password:hashedPassword
     },{new:true})

      return res.status(200).json({
        success:true,
        message:"Faculty Password Changed Successfully",
        faculty
      })
    }

    return res.status(400).json({
      success:false,
      message:"Wrong Old Password"
    })


  }catch(error){
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Error Occured while changing Faculty Password"
    })
  }
}

