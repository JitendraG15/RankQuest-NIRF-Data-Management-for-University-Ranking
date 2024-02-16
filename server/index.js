const express = require("express");
const database = require("./config/database");
const authRouter = require("./routes/Auth");
const studentRouter = require("./routes/StudentProfileRoutes");
const universityRouter = require("./routes/University");
const adminRoute = require("./routes/Admin");
const commonRoute = require("./routes/Common");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const FacultyRoute = require("./routes/Faculty");


const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;

database.connect();
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)
app.use("/api/v1",authRouter);
app.use("/api/v1/student",studentRouter);
app.use("/api/v1/university", universityRouter);
app.use("/api/v1/faculty", FacultyRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/", commonRoute)

app.listen(port, () => {
  console.log("Server is listening at port number ", port);
});
