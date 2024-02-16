const Student = require("../models/Student");
const Address = require("../models/Address");
const EnrollmentDetail = require("../models/EnrollmentDetail");
const EnrolledProgram = require("../models/EnrolledProgram");
const InternshipDetail = require("../models/InternshipDetail");
const PlacementDetail = require("../models/PlacementDetail");

exports.studentPersonalInfo = async (req, res) => {
  try {
    const {
      name,
      fatherName,
      motherName,
      phoneNumber
    } = req.body;
    const id = req.user.id;

   

    const student = await Student.findByIdAndUpdate(
      { _id: id },
      {
        fatherName: fatherName,
        motherName: motherName,
       name:name,
       phoneNumber:phoneNumber
      }, {new:true}
    );

    // const student = await Student.findByIdAndUpdate({_id:id},
    //   {
    //     $push
    //   }, {new:true})


    if(!student){
      return res.status(401).json({
        success:false,
        message:"Student Data Can't Be Updated"
      })
    }
    

    return res.status(200).json({
      success:true,
      message:"Student Data Updated Successfully",
      student
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error While Updating Student Personal Info",
    });
  }
};

// Handler To Fetch Student Profile
exports.getStudentProfile = async (req, res) => {
  try {
    const id = req.user.id;
    console.log("ID:", id);
    const student = await Student.findById(id)
      .populate("addresses")
      .populate("admissionDetails")
      .populate("placementDetails")
      .populate("internshipDetails")
      .populate("enrolledProgram")
      .exec();

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Can't get the user profile",
      });
    }

    console.log("Student Profile:", student);

    return res.status(200).json({
      success: true,
      message: "Profile Data Fetched Successfully",
      student,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error While Fetching Student Profile",
    });
  }
};

//Insert Student Enrollment Details
exports.insertStudentAdmissionDetails = async (req, res) =>{
  try{
    const {id} = req.user;
    const {enrollmentDate,enrollmentTerm, entranceTestName,entranceTestRegistrationNumber,
      entranceTestRollNumber, entranceTestTotalMarks, entranceTestObtainedMarks
    ,qualification, appliedProgrammes} = req.body;

    const admissionDetails = await EnrollmentDetail.create({
      studentID:id,
      enrollmentDate:enrollmentDate,
      enrollmentTerm:enrollmentTerm,
      entranceTestName:entranceTestName,
      entranceTestRegistrationNumber:entranceTestRegistrationNumber,
      entranceTestObtainedMarks:entranceTestObtainedMarks,
      entranceTestTotalMarks:entranceTestTotalMarks,
      entranceTestRollNumber:entranceTestRollNumber,
      qualification:qualification,
      appliedProgrammes:appliedProgrammes
    });

    if(!admissionDetails){
      return res.status(401).json({
        success:false,
        message:"Admission Schema Can't Initilized"
      })
    }

    const student = await Student.findByIdAndUpdate({_id:id},{
      admissionDetails:admissionDetails._id
    },{new:true});

    if(!student){
      return res.status(400).json({
        success:false,
        message:"Student Can't updated with given admission details"
      })
    }

    return res.status(200).json({
      success:true,
      admissionDetails,
      message:"Student Admission Details Updated Successfully"
    })

  }catch(error){
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Error Occured While Inserting Admission Details"
    })
  }
}

// Insert Student Enrolled Program Details
exports.insertEnrolledProgramDetails = async (req, res) =>{
  try{
    const {id} = req.user;
    const {programID,admissionDate,completionYear, isCompletedInStipulatedTime } = req.body;

    const program = await EnrolledProgram.create({
      programID:programID,
      admissionDate:admissionDate,
      completionYear:completionYear,
      isCompletedInStipulatedTime:isCompletedInStipulatedTime
    })

    if(!program){
      return res.status(400).json({
        success:false,
        message:"Can't Initialize EnrolleProgram Schema"
      })
    }


    const student = await Student.findByIdAndUpdate({_id:id},{
      enrolledProgram:program._id
    },{new:true});

    if(!student){
      return res.status(401).json({
        success:false,
        message:"Can't Update Student With Program Enrolled"
      })
    }

    return res.status(200).json({
      success:true,
      message:"Student Enrolled Program Updated succesfully",
      program
    })



  }catch(error){
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Error Occured While Inserting Program Details"
    })
  }
}


// Handler for Inserting Internship Details
exports.insertInternshipDetails = async (req, res) =>{
  try{
    const {id} = req.user;
    const {employer, jobTitle,joiningDate,companyLocation, supervisor, description,stipendPerMonth,
      linkedInProfile, durationInMonth, mode} = req.body;

      const internship = await InternshipDetail.create({
        studentID:id,
        employer:employer,
        jobTitle:jobTitle,
        supervisor:supervisor,
        description:description,
        stipendPerMonth:stipendPerMonth,
        joiningDate:joiningDate,
        linkedInProfile:linkedInProfile,
        durationInMonth:durationInMonth,
        companyLocation:companyLocation,
        mode:mode
      });

      if(!internship){
        return res.status(400).json({
          success:false,
          message:"Internship Schema Not Initialized"
        })
      }

      const student = await Student.findByIdAndUpdate({_id:id},{
        internshipDetails:internship._id
      },{new:true});

      if(!student){
        return res.status(400).json({
          success:false,
          message:"Student Internship Details Can Not be Updated "
        })
      }

      return res.status(200).json({
        success:false,
        message:"Student Internship Details Updated Successfully"
      })

  }catch(error){
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Error Occured While Inserting Internship Details"
    })
  }
}


// ?Handler For Placement Details
exports.insertPlacementDetails = async (req, res)=>{
  try{
    const {id} = req.user;
    const {employer, jobTitle,joiningDate,companyLocation, supervisor, jobDescription,
      salary,linkedInProfile } = req.body;


      const placement = await PlacementDetail.create({
        studentID:id,
        employer:employer,
        jobTitle:jobTitle,
        jobDescription:jobDescription,
        supervisor:supervisor,
        salary:salary,
        linkedInProfile:linkedInProfile,
        joiningDate:joiningDate,
        companyLocation:companyLocation
      })

      if(!placement){
        return res.status(400).json({
          success:false,
          message:"Placement Schema Can't Initialized"
        })
      }

      const student = await Student.findByIdAndUpdate({_id:id},{
        placementDetails:placement._id
      }, {new:true});

      if(!student){
        return res.status(400).json({
          success:false,
          message:"Student Placement Details Can't Updated"
        })
      }

      return res.status(200).json({
        success:true,
        message:"Student Placement Details Updated Successfully",
        placement
      })

  }catch(error){
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Error While Updating Placement Details"
    })
  }
}
