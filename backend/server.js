const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
console.log(port);

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.createConnection(uri).asPromise();
mongoose.connect(
  "mongodb+srv://Haris-Baig:seeker!47@mern-project-1.y9uul.mongodb.net/test?retryWrites=true&w=majority"
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exerciseRouter = require("./routes/exerciseRoute");
const userRouter = require("./routes/userRoute");

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
