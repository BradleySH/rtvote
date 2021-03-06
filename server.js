const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");

const jwt = require("express-jwt");
process.env.SECRET
const DBURI = process.env.DB_URI
const PORT = process.env.PORT

app.use(express.json())
app.use(morgan("dev"));

mongoose.connect(
  DBURI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
);

app.use("/auth", require("./routes/authRouter"));
app.use("/api", jwt({ secret: process.env.SECRET, algorithms:["HS256"]}));
app.use("/api/issues", require("./routes/issueRouter"));
app.use("/api/issues/comment", require("./routes/commentRouter"));

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({ errMsg: err.message })
});

app.listen(PORT, () => {
  console.log("Server is listening on port 9000");
});
