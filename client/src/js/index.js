// Import necessary modules and components
import { Workbox } from "workbox-window";
import Editor from "./editor";
import "./database"; // Import the database module
import "../css/style.css"; // Import styles

// Find the HTML element with the ID "main" and clear its content
const main = document.querySelector("#main");
main.innerHTML = "";

// Function to display a loading spinner
const loadSpinner = () => {
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
  <div class="loading-container">
    <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

// Create an instance of the 'Editor' class
const editor = new Editor();

// If the 'editor' instance is not defined, display a loading spinner
if (typeof editor === "undefined") {
  loadSpinner();
}

// Check if service workers are supported in the browser
if ("serviceWorker" in navigator) {
  // Register a Workbox service worker for offline capabilities
  const workboxSW = new Workbox("/src-sw.js");
  workboxSW.register();
} else {
  // Log an error message if service workers are not supported
  console.error("Service workers are not supported in this browser.");
}
