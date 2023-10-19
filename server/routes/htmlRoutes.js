// Import the 'path' module to work with file paths
const path = require('path');

// Export a function that sets up a route for the root URL ("/") using the 'app' object
module.exports = (app) =>
  // Handle HTTP GET requests to the root URL
  app.get("/", (req, res) =>
    // Send the HTML file located at the specified path
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
  );
