const express = require("express");
const router = express.Router();
const {
  addStudent,
  addFaculty,
  getAllTeachingFaculty,
  getFaculty,
  deleteFaculty,
  getUGStudent,
  getPGStudent,
  getPhDStudent,
  getDiplomaStudent,
  getStudentProfile,
  deleteStudent,
  insertStudentsInBulk,
  deleteAllStudent,
  getAllStudents,
  getParticularStudent,
  insertFacultyInBulk
} = require("../controller/Admin");

router.post("/addStudent", addStudent);
router.post("/addFaculty", addFaculty);
router.get("/getAllTeachingFaculty", getAllTeachingFaculty);
router.post("/getFacultyProfile", getFaculty);
router.delete("/deleteFaculty/:userId", deleteFaculty);
router.get("/getUGStudent", getUGStudent);
router.get("/getPGStudent", getPGStudent);
router.get("/getPhDStudent", getPhDStudent);
router.get("/getDiplomaStudent", getDiplomaStudent);
router.post("/getStudentProfile", getStudentProfile);
router.delete("/deleteStudent/:userId", deleteStudent);
router.post("/uploadBulkDataOfStudent", insertStudentsInBulk);
router.delete("/deleteAllStudents", deleteAllStudent);
router.get("/getAllStudents", getAllStudents);
router.get("/getspecificstudent", getParticularStudent);
router.post("/uploadBulkDataOfFaculty", insertFacultyInBulk);

module.exports = router;
