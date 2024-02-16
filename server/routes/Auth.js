const express = require("express");
const router = express.Router();
const {getList} = require("../controller/Auth");
const {signupStudent, signupFaculty, loginStudent, loginFaculty, changeStudentPassword,
    changeFacultyPassword} = require("../controller/Auth");
const {sendotp} = require("../controller/Mail");
const {auth,} = require("../middlewares/AuthMiddleware");


router.get("/getList",getList);
router.post("/signupStudent", signupStudent);
router.post("/signupFaculty", signupFaculty);
router.post("/loginStudent", loginStudent);
router.post("/loginFaculty", loginFaculty);
router.post("/sendOTP",sendotp);
router.post("/changeStudentPassword", auth, changeStudentPassword);
router.post("/changeFacultyPassword",auth, changeFacultyPassword)

module.exports = router;