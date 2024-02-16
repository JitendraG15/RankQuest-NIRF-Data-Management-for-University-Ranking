const express = require("express");
const router = express.Router();
const {getStudentProfile, studentPersonalInfo, insertStudentAdmissionDetails,
     insertEnrolledProgramDetails, insertInternshipDetails, insertPlacementDetails} = require("../controller/StudentProfile");
const {auth, isStudent, isAdmin} = require("../middlewares/AuthMiddleware");


router.post("/getStudentProfile", auth, isStudent, getStudentProfile );
router.post("/studentPersonalInfo", auth, studentPersonalInfo);
router.post("/insertStudentAdmissionDetails", auth, isStudent, insertStudentAdmissionDetails);
router.post("/insertEnrolledProgramDetails", auth, isStudent, insertEnrolledProgramDetails);
router.post("/insertInternshipDetails", auth, isStudent, insertInternshipDetails);
router.post("/insertPlacementDetails", auth, isStudent, insertPlacementDetails);


module.exports = router;