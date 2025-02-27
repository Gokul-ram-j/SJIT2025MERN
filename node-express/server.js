// Import express library
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// Set up a port for the server to listen on
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());
dotenv.config();
// Basic route that sends a message to the client
app.get("/", (req, res) => {
  res.send("Hello, welcome to the Express server!");
});

// MongoDB connection URI (Replace with your actual connection string)
const mongoURI = "mongodb://localhost:27017/sample";

// Connect to MongoDB using Mongoose
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define a simple schema and model for a collection (e.g., users)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
// signup scheme
const signUpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("sample Collection", userSchema);
const UserSignUp = mongoose.model("usersignups", signUpSchema);
app.post("/signup", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log("hashed password", hashedPassword);
  const newUser = new UserSignUp({
    email: req.body.email,
    password: hashedPassword,
  });
  const payload = req.body;
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "10m" });
  console.log("jwt token", token);
  console.log(newUser);
  await newUser
    .save()
    .then(() => {
      return res.json({ msg: "user Created successfully" });
    })
    .catch((err) => res.json(err));
});

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log("verifying tokem",token);
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log(payload);

    next();
  } catch {
    return res.status(400).json({ msg: "not verified" });
  }
};

app.get("/auth", verifyToken, (req, res) => [
  res.status(200).json({ msg: "token verified successfully" }),
]);

// Sample route to fetch all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: err.message });
  }
});

app.get("/login", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.get("/loginform", (req, res) => {
  res.sendFile("C:/code/html_css/node-express/sample.html");
});

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("Form Data Received:", { name, email, message });

  res.json({ success: true, message: "Form submitted successfully!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
