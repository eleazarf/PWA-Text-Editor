// Import methods from './database.js' for saving and retrieving data from IndexedDB
import { getDb, putDb } from "./database";

// Import the 'header' module
import { header } from "./header";

// Define a class for a text editor
export default class {
  constructor() {
    // Get content from local storage
    const localData = localStorage.getItem("content");

    // Check if CodeMirror library is loaded
    if (typeof CodeMirror === "undefined") {
      throw new Error("CodeMirror is not loaded");
    }

    // Create a CodeMirror editor instance with specific configurations
    this.editor = CodeMirror(document.querySelector("#main"), {
      value: "",
      mode: "javascript",
      theme: "monokai",
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set its content to the data stored in IndexedDB
    // If no data is found in IndexedDB, fall back to local storage, and finally to 'header'
    getDb().then((data) => {
      console.info("Loaded data from IndexedDB, injecting into the editor");
      this.editor.setValue(data || localData || header);
    });

    // Listen for changes in the editor's content and store it in local storage
    this.editor.on("change", () => {
      localStorage.setItem("content", this.editor.getValue());
    });

    // Save the content when the editor loses focus
    this.editor.on("blur", () => {
      console.log("The editor has lost focus");
      putDb(localStorage.getItem("content"));
    });
  }
}
