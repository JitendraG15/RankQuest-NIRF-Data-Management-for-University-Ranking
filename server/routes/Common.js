const express = require("express");
const router = express.Router();
const {getDataForNirfRanking, getSchools} = require("../controller/NIRF");
const {getUniversityData, getDepartmentData} = require("../controller/University")




router.get("/getDataForNirfRanking", getDataForNirfRanking);
router.get("/getSchools", getSchools);
router.get("/getUniversityData", getUniversityData)
router.get("/getDepartmentData", getDepartmentData)



module.exports = router;