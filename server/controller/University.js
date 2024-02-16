const University = require("../models/University");
const School = require("../models/School");
const Department = require("../models/Department");
const EnrolledProgram = require("../models/EnrolledProgram");
const EnrollmentDetail = require("../models/EnrollmentDetail");
const InternshipDetail = require("../models/InternshipDetail");
const PlacementDetail = require("../models/PlacementDetail");
const Program = require("../models/Program");
// const { Place } = require("@mui/icons-material");

// Initialize All Schema
exports.setAllSchema = async (req, res)=>{
    try{
        await EnrolledProgram.create({});
        await EnrollmentDetail.create({});
        await InternshipDetail.create({});
        await PlacementDetail.create({});
        await Program.create({});

        return res.status(200).json({
            success:true,
            message:"All Schema Initialized Successfully"
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error While Initializing all Schema"
        })
    }
}



// University handler
exports.createUniversity = async (req, res) =>{
    try{
        

        // Initializing 
        const university = await University.create({
            universityName:"Central University Of Haryana",
            foundedYear:'2009',
            motto:"विद्याधनं सर्वधनप्रधानम्",
            description:"Central University of Haryana is one of the fifteen new Central Universities established by Ministry of Human Resource Development, Government of India (GoI) in XI Five Year Plan (2007-2012) under the Central University Act-2009 of the Parliament.",
            affiliationType:'UGC',
            accredition:'NAAC',
            viceChancellor:"Prof. Tankeshwar Kumar",
            proViceChancellor:"Prof. (Dr.) Sushma Yadav",
            schools:[],
            students:[],
            Faculties:[],
            addesses:[],
            languages:["Hindi", "English"],
        });


        if(!university){
            return res.status(401).json({
                success:false,
                message:"University Schmea Not Initialized"
            })
        }

        return res.status(200).json({
            success:true,
            message:"University Schema Initialized Successfully"
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"University Schema Can't Initialized. Try Again Later"
        })
    }
}

// School Handler
exports.createSchool = async (req, res) =>{
    try{
        const {universityID, schoolName, description, dean, departments,facultyMembers } = req.body;

          const school = await School.create({
            universityID, schoolName, description, dean, departments, facultyMembers
          });

          if(!school){
            return res.status(401).json({
                success:false,
                message:"School Schmea Not Initialized"
            })
          }

          return res.status(200).json({
            success:true,
            message:"New School Created Successfully",
            school
          })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Unknown Error Ocuured While Initializing School"
        })
    }
}

// Department Handler
exports.createDepartment = async (req, res)=>{
    try{
        const {schoolID, departmentName, hod, programs, abbreviation, facultyMembers, advisors, 
            budgetAndFunding, externalPartnerships, facilities, email, phoneNumber} = req.body;

            const department = await Department.create(
                {schoolID, departmentName, hod, programs, abbreviation, facultyMembers, advisors, 
                    budgetAndFunding, externalPartnerships, facilities, email, phoneNumber}
            );

            if(!department){
                return res.status(401).json({
                    success:false,
                    message:"Error occured while Initializing department"
                })
            };

          console.log("Department:", department);
            return res.status(200).json({
                success:true,
                message:"New Department Created Successfully",
                department
            });

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error While Creating Department"
        })
    }
}

// insert Program

exports.insertProgram = async (req, res) =>{
    try{
        const {departmentID, programCode, programType, description, duration, seats,
            syllabus, yearOffered, programName} = req.body;

        const program = await Program.create({
             departmentID:departmentID,
             programCode:programCode,
             programName:programName,
             programType:programType,
             description:description,
             duration:duration,
             seats:seats,
             syllabus:syllabus,
             yearOffered:yearOffered
        })

        if(!program){
            return res.status(400).json({
                success:false,
                message:"Program Schema Not Initialized"
            })
        }

        await Department.findByIdAndUpdate({_id:departmentID},{
            $push: { programs: program._id } // Assuming the programs field is an array of program IDs
          },{new:true})

        return res.status(200).json({
            success:true,
            message:"New Program Created Successfully"
        })

    }catch(error){
        console.error(error);
        return res.status({
            success:false,
            message:"Error While Creating Program"
        })
    }
}


// Get University Data
exports.getUniversityData = async (req, res)=>{
    try{

        const university = await University.findOne({"universityName" : "Central University Of Haryana"})
                                 .populate("schools")
                                 .populate("students")
                                 .exec();

        if(!university){
            return res.status(400).json({
                success:false,
                message:"No Data Found For University"
            })
        }

        return res.status(200).json({
            success:true,
            message:"University Data Fetched Successfully",
            university
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error Occured While Fetching University Data"
        })
    }
}

// Get Departments
exports.getDepartmentData = async (req, res)=>{
    try{

        const departments = await Department.find({})
                                  .populate("schoolID")
                                //   .populate("hod")
                                  .populate("programs")
                                //   .populate("facultyMembers")
                                //   .populate("advisors")
                                  .exec()

        if(!departments){
            return res.status(400).json({
                success:false,
                message:"No Data Found For Department"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Department Data Fetched Successfully",
            departments
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error Occured While Fetching University Data"
        })
    }
}

// Get Departments
exports.getPrograms = async (req, res)=>{
    const departmentID = req.query.departmentID;
    try{

        const programs = await Program.find({departmentID:departmentID});

        if(!programs){
            return res.status(400).json({
                success:false,
                message:"No Data Found For programs"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Program Data Fetched Successfully",
            programs
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error Occured While Fetching Program Data"
        })
    }
}

