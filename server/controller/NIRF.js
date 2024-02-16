const Program = require("../models/Program");
const Student = require("../models/Student");
const Faculty = require("../models/Faculty");
const School = require("../models/School");

// Get Data For nirf Ranking
exports.getDataForNirfRanking = async (req, res) => {
  try {
    // Fetch Total intake
    const allProgram = await Program.find({});
    var seats = 0;
    var enrolledStudents = 0;

    allProgram.map((program, Key) => {
      seats = seats + (program.seats ? program.seats : 0);
      // enrolledStudents += (program.enrolledStudents.length > 0 ? program.enrolledStudents.length : 0)
    });

    const allStudents = await Student.find({});

    const allMaleStudents = await Student.find({ gender: "Male" });
    const allFemaleStudents = await Student.find({ gender: "Female" });
    const UG_PG_Students = await Student.aggregate([
      {
        $lookup: {
          from: 'enrolledprograms',
          localField: 'enrolledProgram',
          foreignField: '_id',
          as: 'enrolledPrograms',
        },
      },
      {
        $lookup: {
          from: 'programs',
          localField: 'enrolledPrograms.programID',
          foreignField: '_id',
          as: 'programs',
        },
      },
      {
        $match: {
          $or: [
            { 'programs.programType': 'UG' },
            { 'programs.programType': 'PG' },
          ],
        },
      },
    ]);


    const otherStateStudents = await Student.find({
      state: { $ne: "Haryana" },
    });
    const otherCountryStudent = await Student.find({ country: "India" });
    enrolledStudents = allStudents.length;

    // const allTeachingFaculty = await Faculty.find({
    //   role: "Teaching Faculty",
    //   // experienceInMonth: { $gt: 100 },
    // });

    
    return res.status(200).json({
      seats,
      enrolledStudents,
      maleStudent: allMaleStudents.length,
      femaleStudent: allFemaleStudents.length,
      UG_PG_Students:UG_PG_Students.length,
      otherStateStudents: otherStateStudents.length,
      otherCountryStudents: otherCountryStudent.length - enrolledStudents,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error Occured While Fetching Data For Ranking",
    });
  }
};



// Get All Department
exports.getSchools = async (req, res) => {
  try {
    const schools = await School.find({});

    if (!schools) {
      return res.status(400).json({
        success: false,
        message: "No Schools To Show",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data Fetched Successfully",
      schools,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error Occured While Fetching Schools Data",
    });
  }
};
