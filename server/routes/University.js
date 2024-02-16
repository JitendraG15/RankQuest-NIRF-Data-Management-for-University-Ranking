const express = require("express");
const router = express.Router();
const  {createUniversity, createSchool, createDepartment, setAllSchema,
    insertProgram, getPrograms} = require("../controller/University");

router.post("/createUniversity", createUniversity);
router.post("/createSchool", createSchool);
router.post("/createDepartment", createDepartment);
router.put("/setAllSchema", setAllSchema);
router.post("/insertProgram", insertProgram);
router.get("/getPrograms", getPrograms);

module.exports = router;