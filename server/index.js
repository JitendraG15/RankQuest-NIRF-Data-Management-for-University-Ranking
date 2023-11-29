const express = require("express");
const database = require("./config/database");
// const University = require("./models/University");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;

database.connect();



app.listen(port, () => {
  console.log("Server is listening at port number ", port);
});
