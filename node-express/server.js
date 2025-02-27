// Import express library
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require('cors')
// Set up a port for the server to listen on
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors)
// Basic route that sends a message to the client
app.get('/', (req, res) => {
  res.send('Hello, welcome to the Express server!');
});

// MongoDB connection URI (Replace with your actual connection string)
const mongoURI = 'mongodb://localhost:27017/sample';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define a simple schema and model for a collection (e.g., users)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
// signup scheme
const signUpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});


app.post('/signup',(req,res)=>{
  console.log('entered db')
  console.log(req.body)
})

const User = mongoose.model('sample Collection', userSchema);



// Sample route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
});

app.get('/login',(req,res)=>{
  res.send('<h1>hello</h1>')
})

app.get('/loginform',(req,res)=>{
  res.sendFile('C:/code/html_css/node-express/sample.html')
})

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
