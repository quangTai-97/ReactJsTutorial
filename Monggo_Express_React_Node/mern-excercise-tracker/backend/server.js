const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATALAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MonggoDb database connection estabLished seccessfully");
});

const excercisesRouter = require("./routes/excercise");
const usersRouter = require("./routes/user");

app.use("/excercise", excercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
