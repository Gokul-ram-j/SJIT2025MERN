// Import express library
const express = require('express');
const app = express();

// Set up a port for the server to listen on
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic route that sends a message to the client
app.get('/', (req, res) => {
  res.send('Hello, welcome to the Express server!');
});





// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
