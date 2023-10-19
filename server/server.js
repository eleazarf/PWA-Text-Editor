// Import the 'express' framework
const express = require("express");

// Create an instance of the 'express' application
const app = express();

// Define the port for the server, using the environment variable 'PORT' or defaulting to 3000
const PORT = process.env.PORT || 3000;

// Middleware Setup

// Serve static files from the '../client/dist' directory
app.use(express.static("../client/dist"));

// Parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require and initialize HTML routes for the application
require("./routes/htmlRoutes")(app);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));