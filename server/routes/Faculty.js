const express = require("express");
const router = express.Router();
const {changeFacultyRole} = require("../controller/FacultyProfile");

router.post("/changeRole", changeFacultyRole);

module.exports = router;